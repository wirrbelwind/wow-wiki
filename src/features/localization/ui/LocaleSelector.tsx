'use client'

import { Button, Modal, ModalBody, ModalContent, ModalHeader, Radio, RadioGroup } from "@nextui-org/react"
import { localeTitles, regionsOptions } from "../config";
import { useState } from "react";
import { Locale, RegionKeyBN } from "../types";
import { useFormState } from "react-dom";
import { changeRegionAndLocale } from "../model/changeRegionAndLocale";

interface LocaleSelectorProps {
	closable: boolean
	onClose?: () => void
}

export const LocaleSelector: React.FC<LocaleSelectorProps> = ({ closable, onClose }) => {
	const [locales, setLocales] = useState<Locale[]>([])
	const [formState, action] = useFormState(changeRegionAndLocale, undefined)

	return (
		<Modal
			size="full"
			isOpen={true}
			isDismissable={false}
			isKeyboardDismissDisabled={true}
			hideCloseButton={!closable}
			onClose={onClose}
		>
			<ModalContent>
				<>
					<ModalHeader className="flex flex-col gap-1">Select region and locale</ModalHeader>
					<ModalBody>
						<form action={action}>
							<RadioGroup
								label="Select region"
								name="region"
								onChange={e => {
									const region = e.currentTarget.value as RegionKeyBN
									const localesOfRegion = regionsOptions.find(option => option.value === region)?.availableLocales

									if (!localesOfRegion) {
										throw new Error(`Not found locales of region ${region}`)
									}

									setLocales(localesOfRegion)
								}}
							>
								<div className="flex flex-wrap gap-5">
									{regionsOptions.map(region => (
										<Radio
											key={region.value}
											value={region.value}
										>
											{region.title}
										</Radio>
									))}
								</div>
							</RadioGroup>

							{locales.length > 0 && (
								<RadioGroup
									label="Select locale"
									name="locale"
									className="mt-5"
								>
									<div className="flex gap-5 flex-wrap">
										{locales.map(locale => (
											<Radio
												key={locale}
												value={locale}
											>
												{localeTitles[locale]}
											</Radio>
										))}
									</div>
								</RadioGroup>
							)}

							<Button type="submit" color="primary" className="mt-10">
								Ok
							</Button>
						</form>
						{formState?.errors.map(error => (
							<p key={error}>{error}</p>
						))}
					</ModalBody>

				</>
			</ModalContent>
		</Modal>

	)
}