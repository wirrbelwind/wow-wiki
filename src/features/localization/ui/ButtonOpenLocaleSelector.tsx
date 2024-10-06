'use client'
import { Button, useDisclosure } from "@nextui-org/react";
import { LocaleSelectorModal } from "./LocaleSelectorModal";

export const ButtonOpenLocaleSelector = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Button onPress={onOpen}>Open Modal</Button>
			{isOpen && <LocaleSelectorModal closable={true} onClose={onClose} />}
		</>
	)
}