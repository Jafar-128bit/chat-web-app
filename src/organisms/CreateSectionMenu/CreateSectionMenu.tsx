import './createSectionMenu.css';
import React, {ChangeEvent} from "react";
import {Button, HText, InputField, PText} from "../../atoms/IndexAtom";
import {Toggle} from "../../molecules/IndexMolecules";
import {SectionDataType} from "../../types/types";
import {FormikErrors, FormikTouched} from "formik";

type Prop = {
    handleStopPropagation: (e: React.MouseEvent) => void;
    values: SectionDataType;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    errors: FormikErrors<SectionDataType>;
    touched: FormikTouched<SectionDataType>;
    blur: React.FocusEventHandler<HTMLInputElement>;
}

const CreateSectionMenu = ({
                             handleStopPropagation,
                             handleChange,
                             blur,
                             handleSubmit,
                             values,
                             touched,
                             errors
                         }: Prop) => {

    return <div className="createSectionMenu" onClick={e => handleStopPropagation(e)}>
        <section className="createSectionMenu__section1">
            <HText
                titleTag="h1"
                titleInnerText="Add Section"
                styleData={{
                    fontSize: 32,
                    color: "var(--colorBlack)",
                    fontWeight: 400,
                }}
                headingStyleName=""
            />
        </section>
        <section className="createSectionMenu__section2">
            <InputField
                inputType="text"
                labelText="Section Name"
                name="sectionName"
                blurCallback={blur}
                onChangeCallback={handleChange}
                inputValue={values.sectionName}
                inputFieldStyle="sectionInput"
                placeholder="Example : Office Chat"
                showError={touched.sectionName && errors.sectionName}
                errorMessage={errors.sectionName ? errors.sectionName : ""}
            />
            <InputField
                inputType="text"
                labelText="Section Description"
                name="description"
                blurCallback={blur}
                onChangeCallback={handleChange}
                inputValue={values.description}
                inputFieldStyle="sectionInput"
                placeholder="Describe your section"
                showError={touched.description && errors.description}
                errorMessage={errors.description ? errors.description : ""}
            />
        </section>
        <section className="createSectionMenu__section3">
            <Button propData={{
                innerButtonText: "Create",
                buttonType: "submit",
                buttonStyleName: "createGroupSubmitButton",
            }}
                    onClickFunction={handleSubmit}
            >
                {null}
            </Button>
        </section>
    </div>
}

export default CreateSectionMenu;