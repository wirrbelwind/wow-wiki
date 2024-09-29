import { paraglide } from "@inlang/paraglide-next/plugin"
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default paraglide({
	paraglide: {
		project: "./src/features/localization/model/project.inlang",
		outdir: "./src/features/localization/model/paraglide"
	},
	...nextConfig
});
