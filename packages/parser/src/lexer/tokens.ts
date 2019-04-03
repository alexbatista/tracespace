import {Token as MooToken} from 'moo'

export const T_CODE = 'T_CODE'
export const G_CODE = 'G_CODE'
export const M_CODE = 'M_CODE'
export const D_CODE = 'D_CODE'
export const ASTERISK = 'ASTERISK'
export const PERCENT = 'PERCENT'
export const GERBER_FORMAT = 'GERBER_FORMAT'
export const GERBER_UNITS = 'GERBER_UNITS'
export const GERBER_TOOL_DEF = 'GERBER_TOOL_DEF'
export const GERBER_TOOL_NAME = 'GERBER_TOOL_NAME'
export const DRILL_COMMENT = 'DRILL_COMMENT'
export const DRILL_UNITS = 'DRILL_UNITS'
export const DRILL_ZERO_INCLUSION = 'DRILL_ZERO_INCLUSION'
export const DRILL_COORD_FORMAT = 'DRILL_COORD_FORMAT'
export const DRILL_TOOL_PROPS = 'DRILL_TOOL_PROPS'
export const NUMBER = 'NUMBER'
export const CHAR = 'CHAR'
export const WHITESPACE = 'WHITESPACE'
export const NEWLINE = 'NEWLINE'
export const CATCHALL = 'CATCHALL'
export const ERROR = 'ERROR'

export type TokenType =
  | typeof T_CODE
  | typeof G_CODE
  | typeof M_CODE
  | typeof D_CODE
  | typeof ASTERISK
  | typeof PERCENT
  | typeof GERBER_FORMAT
  | typeof GERBER_UNITS
  | typeof GERBER_TOOL_DEF
  | typeof GERBER_TOOL_NAME
  | typeof DRILL_COMMENT
  | typeof DRILL_UNITS
  | typeof DRILL_ZERO_INCLUSION
  | typeof DRILL_COORD_FORMAT
  | typeof DRILL_TOOL_PROPS
  | typeof NUMBER
  | typeof CHAR
  | typeof WHITESPACE
  | typeof NEWLINE
  | typeof CATCHALL
  | typeof ERROR

export interface Token extends MooToken {
  type: TokenType
}