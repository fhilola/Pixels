import React from "react"
export type Children = {
    children: React.ReactNode
}

export interface SearchData{
    data: (object | undefined)[],
    isloading: boolean,
    iserror: boolean,
    issuccess: boolean,
    message: (string | null),
    value: (string | null)
}