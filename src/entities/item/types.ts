export interface Item {
	id: number
	name: string
	quality: Quality
	level: number
	required_level: 30
	media: Media
	item_class: ItemClass
	item_subclass: ItemSubclass
	inventory_type: InventoryType
	purchase_price: number
	sell_price: number
	max_count: number
	is_equippable: boolean
	is_stackable: boolean
	preview_item
	purchase_quantity: number
	appearances: Appearances[]
}

interface Quality {
	type: string
	name: string
}

interface Media {
	key: {
		href: string
	}
	id: number
}

interface ItemClass {
	key: {
		href: string
	}
	name: string
	id: number
}

interface ItemSubclass {
	key: {
		href: string
	}
	name: string
	id: number
}

interface InventoryType {
	type: string
	name: string
}

interface Appearances {
	id: number
	key: {
		href: string
	}
}