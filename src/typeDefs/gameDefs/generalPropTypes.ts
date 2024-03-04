import { PropsWithChildren } from 'react'

export interface IgtTabsProps extends PropsWithChildren {
  selectedTab: string
  setSelectedTab: (tab: string) => void
}

export interface IgtTabProps extends PropsWithChildren {
  name: string
  selected: boolean
}

export interface TabType {
  name: string
  isActive: boolean
}

export interface RecruitmentProps {}
