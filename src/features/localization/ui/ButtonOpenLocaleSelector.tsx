'use client'
import { Button, useDisclosure } from "@nextui-org/react";
import { LocaleSelector } from "./LocaleSelector";

export const ButtonOpenLocaleSelector = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Button onPress={onOpen}>Open Modal</Button>
			{isOpen && <LocaleSelector closable={true} onClose={onClose} />}
		</>
	)
}