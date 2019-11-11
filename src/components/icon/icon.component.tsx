import React, { FunctionComponent } from 'react'

type IconType = {
  alias: string
  modifier?: string
}

export const Icon: FunctionComponent<IconType> = ({ alias, modifier }) => {
  return <span className="icon icon--{alias}" title="{alias}"></span>
}
