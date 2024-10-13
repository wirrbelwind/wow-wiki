import { useState } from "react"

export const useBoolean = (initialValue: boolean = false) => {
	const [value, setValue] = useState(initialValue)

	const toggle = () => setValue(prevValue => !prevValue)
	const on = () => setValue(true)
	const off = () => setValue(false)

	return {
		value,
		toggle,
		on,
		off
	}
}
