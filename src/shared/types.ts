export interface BNResponse {
	"_links": {
		"self": {
			"href": string
		}
	}
}

export interface EntityResponse extends BNResponse {
	"id": number
}


export interface MountResponse extends EntityResponse {
	name: string
	creature_displays: Array<{
		key: {
			href: string
		}
		id: number
	}>
	description: string
	"source": {
		"type": string,
		"name": string
	},
	"faction"?: {
		"type": string,
		"name": string
	},
	"requirements": {
		"faction"?: {
			"type": string,
			"name": string
		}
	}
}

export interface MediaAsset {
	key: string
	value: string // href
	file_data_id: number
}
export interface MediaResponse extends EntityResponse {
	assets: MediaAsset[]
}

export interface AchievementResponse extends EntityResponse {
	"category": {
		"key": {
			"href": string
		},
		"name": string,
		"id": number
	},
	"name": string,
	"description": string,
	"points": number,
	"is_account_wide": boolean,
	"criteria": {
		"id": number,
		"description": string,
		"amount": number
	},
	"next_achievement": {
		"key": {
			"href": string
		},
		"name": string,
		"id": number
	},
	"media": {
		"key": {
			"href": string
		},
		"id": number
	},
	"display_order": number
}