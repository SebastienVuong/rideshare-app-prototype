import {atom} from "jotai"

import {TRider, TDriver} from "app/types/api-response"

export const userAtom = atom<TRider | TDriver | undefined>(undefined)
