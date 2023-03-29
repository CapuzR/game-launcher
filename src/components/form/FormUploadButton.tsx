import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";
import { cx } from "@/utils";
import UploadButton, { UploadButtonProps } from "../ui/UploadButton";
import FormErrorMessage from "./FormErrorMessage";
import FormWrapper from "./FormWrapper";

export type FormUploadButtonProps<T extends FieldValues> = UploadButtonProps &
  UseControllerProps<T>;

const FormUploadButton = <T extends FieldValues>({
  control,
  name,
  className,
  onUpload,
  imageUpload,
  ...rest
}: FormUploadButtonProps<T>) => {
  const {
    field: { onChange: fieldChange, ...restField },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const onChange = (file: string | File) => {
    if (!imageUpload) return;
    fieldChange(file);
  };

  return (
    <FormWrapper>
      <UploadButton
        {...restField}
        className={cx(error && "border-error dark:border-error")}
        onUpload={onChange}
        imageUpload={imageUpload}
        {...rest}
      />

      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormWrapper>
  );
};

export default FormUploadButton;
