import { useFormik } from 'formik';

export const FormikProvider = ({
	schema,
	onSubmit,
	render,
}) => {
	const initialValues = schema.reduce((initialValues, field) => {
		initialValues[field.name] = field.value;
		return initialValues;
	}, {});

	const formik = useFormik({
		onSubmit,
		initialValues,
		enableReinitialize: true,
	});

	return render({ formik, schema });
};
