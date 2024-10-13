'use client'
import { Button, useDisclosure } from "@nextui-org/react";
import { LocaleSelectorModal } from "./LocaleSelectorModal";
import { GrLanguage } from "react-icons/gr";

export const ButtonOpenLocaleSelector = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Button
				onPress={onOpen}
				isIconOnly
				className="bg-none"
			>
				<GrLanguage size="2rem"/>
			</Button>
			{isOpen && <LocaleSelectorModal closable={true} onClose={onClose} />}
		</>
	)
}