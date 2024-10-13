import { getAchievement } from "@/shared/utils/getAchievment"

export default async function AchievementPage({ params: { id } }: { params: { id: string } }) {
	const achievement = await getAchievement(id)

	return (
		<div>
			<div>{achievement.data.name}</div>
			<div>{achievement.data.id}</div>
			<div>{achievement.data.category.name}</div>
			<div>{achievement.data.criteria.amount}</div>
			<div>{achievement.data.criteria.description}</div>
			<div>{achievement.data.criteria.id}</div>
			<div>{achievement.data.description}</div>
			<div>{achievement.data.is_account_wide}</div>
			<div>{achievement.data.next_achievement.name}</div>
			<div>{achievement.data.points}</div>
			<img src={achievement.mediaHref}/>
		</div>
	)
}
