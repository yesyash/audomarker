type ClassName = string | boolean;

export const cn = (...classes: ClassName[]) => {
	return classes.filter(Boolean).join(' ');
};
