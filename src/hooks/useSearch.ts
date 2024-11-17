import { useSearchHot } from '@/api/search'
import { useSearchSuggest } from '@/api/search'
import { CompoundResult } from '@/api/search/compoundResult'
import { Hot } from '@/api/search/hotResult'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const useSearch = () => {
  const [open, setOpen] = useState(false)
  const [openHotSearch, setOpenHotSearch] = useState(false)
  const [openSuggest, setOpenSuggest] = useState(false)
  const [input, setInput] = useState<string>('')
  const [hotSearch, setHotSearch] = useState<Hot[] | null>(null)
  const [suggest, setSuggest] = useState<CompoundResult | null>(null)
  const navigate = useNavigate()

  const handleSearch = () => {
    if (input.length > 0) {
      navigate('/search', { state: { keyword: input } })
    }
  }

  const handleOnClickHotSearch = (keyword: string) => {
    setInput(keyword)
    navigate('/search', { state: { keyword } })
  }

  const handleInputFocus = () => {
    setOpen(true)
  }

  const handleInputBlur = () => {
    setOpen(false)
  }

  useEffect(() => {
    const fetchHotSearch = async () => {
      const data = await useSearchHot()
      if (data) {
        setHotSearch(data.hots)
      }
    }
    const fetchSuggest = async () => {
      const data = await useSearchSuggest(input)
      if (data) {
        setSuggest(data)
      }
    }
    if (open && input.length > 0) {
      fetchSuggest()
      setOpenSuggest(true)
      setOpenHotSearch(false)
    } else if (open && input.length === 0) {
      fetchHotSearch()
      setOpenHotSearch(true)
      setOpenSuggest(false)
    }
  }, [input, open])
  return {
    open,
    openHotSearch,
    openSuggest,
    hotSearch,
    suggest,
    input,
    handleSearch,
    handleOnClickHotSearch,
    handleInputFocus,
    handleInputBlur,
    setInput
  }
}
