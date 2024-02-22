import React from "react"
import {Text} from "react-native"

interface ILoadingHandlerProps {
  loading: boolean
  children: React.ReactNode | React.ReactNode[] | null
}

export const LoadingHandler = ({
  loading,
  children,
}: ILoadingHandlerProps): JSX.Element => {
  if (loading) {
    return <LoadingText />
  }
  return <>{children}</>
}

const LoadingText = () => {
  return <Text>Loading...</Text>
}
