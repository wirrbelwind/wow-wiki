'use client'

import { Button, Card, Progress, CardFooter, CardBody } from "@nextui-org/react"
import { useState } from "react"
import { StepList } from "./StepList"

export const LoginGuide = () => {
	const [step, setStep] = useState<number>(0)


	const handleNext = () => setStep(value => value + 1)
	const handlePrev = () => setStep(value => value - 1)

	const isFirstStep = step === 0
	const isLastStep = step === StepList.length - 1

	const progress = (step + 1) / StepList.length * 100

	return (
		<Card>
			<CardBody>
				<Progress aria-label="Progress of guide..." value={progress} />

				<div>
					{StepList[step].content()}
				</div>

			</CardBody>
			<CardFooter className="flex gap-2 mt-auto">
				<Button
					className="grow"
					onClick={handlePrev}
					disabled={isFirstStep}
				>
					Prev
				</Button>

				<Button
					className="grow"
					onClick={handleNext}
					disabled={isLastStep}
				>
					Next
				</Button>
			</CardFooter>
		</Card>
	)
}