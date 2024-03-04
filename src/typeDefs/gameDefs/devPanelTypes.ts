import {
  ChoiceField,
  DeveloperPanel,
  DisplayField,
  FunctionField,
  NumberField,
  RangeField,
} from '@123ishatest/igt-library'

export interface IgtButtonFieldProps {
  field: FunctionField
}

export interface IgtChoiceFieldProps {
  field: ChoiceField
}

export interface IgtDisplayFieldProps {
  field: DisplayField
  value: unknown
}

export interface IgtNumberFieldProps {
  field: NumberField
}

export interface IgtRangeFieldProps {
  field: RangeField
}

export interface IgtDeveloperPanelProps {
  developerPanel: DeveloperPanel
}
