export interface Item {
	id: number
	name: string
	quality: {
		type: string
		name: string
	}
	level: number
	required_level: 30
	media: {
		key: {
			href: string
		}
		id: number
	}
	item_class: {
		key: {
			href: string
		}
		name: string
		id: number
	}
	item_subclass: {
		key: {
			href: string
		}
		name: string
		id: number
	}
	inventory_type: {
		type: string
		name: string
	}
	purchase_price: number
	sell_price: number
	max_count: number
	is_equippable: boolean
	is_stackable: boolean
	preview_item: {
		"item": {
			"key": {
				"href": string
			},
			"id": number
		},
		"sockets": [
			{
				"socket_type": {
					"type": string,
					"name": string
				}
			}
		],
		"quality": {
			"type": string,
			"name": string
		},
		"name": string,
		"media": {
			"key": {
				"href": string
			},
			"id": number
		},
		"item_class": {
			"key": {
				"href": string
			},
			"name": string,
			"id": number
		},
		"item_subclass": {
			"key": {
				"href": string
			},
			"name": string,
			"id": number
		},
		"inventory_type": {
			"type": string,
			"name": string
		},
		"binding": {
			"type": string,
			"name": string
		},
		"armor": {
			"value": number,
			"display": {
				"display_string": string,
				"color": {
					"r": number,
					"g": number,
					"b": number,
					"a": number
				}
			}
		},
		"stats": Array<{
			"type": {
				"type": string,
				"name": string
			},
			"value": number,
			"is_negated": boolean,
			"display": {
				"display_string": string,
				"color": {
					"r": number,
					"g": number,
					"b": number,
					"a": number
				}
			}
		}>,
		"socket_bonus": string,
		"sell_price": {
			"value": number,
			"display_strings": {
				"header": string,
				"gold": string,
				"silver": string,
				"copper": string
			}
		},
		"requirements": {
			"level": {
				"value": number,
				"display_string": string
			}
		},
		"level": {
			"value": number,
			"display_string": string
		},
		"is_subclass_hidden": boolean
	}
	purchase_quantity: number
	appearances: Array<{
		id: number
		key: {
			href: string
		}
	}>
}
