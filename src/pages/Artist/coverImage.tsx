interface Category {
  coverUrl: string
  type: number
  area: number
}

const categoryInfos: Category[] = [
  {
    coverUrl:
      'https://p1.music.126.net/1qr8a9G8pWEMoruLJaBv8A==/109951169014564421.jpg?param=640y300',
    type: 1,
    area: 7
  },
  {
    coverUrl:
      'https://p1.music.126.net/EGHQp6IYf1bI8-27AVcyDQ==/109951169426922822.jpg?param=640y300',
    type: 2,
    area: 7
  },
  {
    coverUrl:
      'https://p2.music.126.net/jJtHjeXXLNofowo6CXlPIA==/109951168184990889.jpg?param=640y300',
    type: 3,
    area: 7
  },
  {
    coverUrl:
      '	https://p1.music.126.net/rQnFyWZt9yhg9MON2lH2UQ==/109951166316759373.jpg?param=640y300',
    type: 1,
    area: 96
  },
  {
    coverUrl:
      'https://p1.music.126.net/J9vY1-_n5msBf8nyCKdL_w==/109951167881974520.jpg?param=640y300',
    type: 2,
    area: 96
  },
  {
    coverUrl:
      'https://p2.music.126.net/_yDVvfmDLOTPxkQ_vCKVDg==/109951166366047050.jpg?param=640y300',
    type: 3,
    area: 96
  },
  {
    coverUrl:
      'https://p1.music.126.net/iBE4CbZHrQaZZ9df1DMcEA==/109951169888981488.jpg?param=640y300',
    type: 1,
    area: 8
  },
  {
    coverUrl:
      '	https://p1.music.126.net/1aoMt5IJppqq-9naHvr7YA==/109951168377713009.jpg?param=640y300',
    type: 2,
    area: 8
  },
  {
    coverUrl:
      'https://p1.music.126.net/7c2IFkZYp7MBmazQzdzGpA==/109951169280431899.jpg?param=640y300',
    type: 3,
    area: 8
  },
  {
    coverUrl:
      'https://p1.music.126.net/MUojHCu782c07iu3xDXJuw==/109951167699858037.jpg?param=640y300',
    type: 1,
    area: 16
  },
  {
    coverUrl:
      'https://p2.music.126.net/_QI48888ypTO1Pt0FMMZKg==/109951170130637529.jpg?param=640y300',
    type: 2,
    area: 16
  },
  {
    coverUrl:
      'https://p2.music.126.net/vY_0HYqgraysBLWXuJ5tIQ==/109951168721913427.jpg?param=640y300',
    type: 3,
    area: 16
  },
  {
    coverUrl:
      'https://p2.music.126.net/ndFVtoxsvLICIEeBKiCnFQ==/109951164629047950.jpg?param=640y300',
    type: 1,
    area: 0
  },
  {
    coverUrl:
      'https://p2.music.126.net/bY0HBXshktt1uYBCXMKkXg==/109951164292657639.jpg?param=640y300',
    type: 2,
    area: 0
  },
  {
    coverUrl:
      'https://p2.music.126.net/-x2u7w1E98mnhE2rPqEk7Q==/109951165735418971.jpg?param=640y300',
    type: 3,
    area: 0
  }
]

export const findUrl = (type: number, area: number) => {
  const categoryData = categoryInfos.find(
    (e) => e.area === area && e.type === type
  )
  if (!categoryData) return ''
  return categoryData.coverUrl
}
