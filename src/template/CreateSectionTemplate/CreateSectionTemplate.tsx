import {CreateSectionMenu} from '../../organisms/IndexOrganism';
import React, {useState} from "react";
import {FormikHelpers, useFormik} from 'formik';
import * as Yup from 'yup';
import {SectionDataType} from "../../types/types";
import {sectionInfoData} from "../../data/data";
import {toggleCloseAll} from "../../store/slices/popUpSlices";
import {useDispatch} from "react-redux";

const validationSchema = Yup.object().shape({
    sectionName: Yup.string()
        .required('Section name is required')
        .min(4, 'Section name must be at least 4 characters')
        .max(80, 'Section name must not be more than 80 characters'),
    description: Yup.string()
        .max(255, 'Description must not be more than 255 characters'),
    isPrivate: Yup.boolean()

});

const initialSectionData: SectionDataType = {
    sectionName: "",
    description: "",
}

const CreateSectionTemplate = () => {
    const dispatch = useDispatch();
    const stopPropagation = (e: React.MouseEvent): void => {
        e.stopPropagation();
    };

    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = (values: SectionDataType, {setSubmitting}: FormikHelpers<SectionDataType>) => {
        setLoading(true);
        alert(JSON.stringify(values, null, 2));
        console.log('Form Submitted:', values);
        sectionInfoData.push({
            sectionName: values.sectionName,
            description: values.description,
            unreadMessage: 0,
        });
        setSubmitting(false);
        setLoading(false);
        dispatch(toggleCloseAll());
    };

    const formik = useFormik({
        initialValues: initialSectionData,
        validationSchema: validationSchema,
        onSubmit: handleSubmit,
    });

    return <>
        <CreateSectionMenu
            handleStopPropagation={stopPropagation}
            handleChange={formik.handleChange}
            handleSubmit={formik.handleSubmit}
            values={formik.values}
            errors={formik.errors}
            touched={formik.touched}
            blur={formik.handleBlur}
        />
    </>
}

export default CreateSectionTemplate;