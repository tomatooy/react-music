import * as Select from '@radix-ui/react-select'
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import SelectItem from '../ui/select'

interface Props {
  countryCode: string
  setCountryCode: React.Dispatch<React.SetStateAction<string>>
  className?: string
  disabled?: boolean
}
const SelectCountryCode: React.FC<Props> = ({
  countryCode,
  setCountryCode,
  disabled
}) => (
  <Select.Root
    value={countryCode}
    onValueChange={setCountryCode}
    disabled={disabled}
  >
    <Select.Trigger
      className="inline-flex bg-secondary h-[35px] items-center justify-center gap-[5px] rounded px-[15px] text-[13px]"
      aria-label="countryCode"
    >
      <Select.Value placeholder="Country Code">{countryCode}</Select.Value>
      <Select.Icon>
        <ChevronDownIcon />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className="z-50">
        <Select.ScrollUpButton className="flex h-[25px] cursor-default items-center justify-center bg-white border-gray">
          <ChevronUpIcon />
        </Select.ScrollUpButton>
        <Select.Viewport className="p-[5px] bg-secondary rounded-lg">
          <Select.Group>
            <SelectItem value="1">US:1</SelectItem>
            <SelectItem value="86">China:86</SelectItem>
          </Select.Group>
        </Select.Viewport>
        <Select.ScrollDownButton className="flex h-[25px] cursor-default items-center justify-center bg-white">
          <ChevronDownIcon />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
)
export default SelectCountryCode
