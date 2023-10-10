import Input, { CustomInput } from '@/components/common/Input';
import { FieldProps } from 'formik';
import { FC } from 'react';

interface CustomFormikInputProps extends FieldProps {
  customInputProps: CustomInput;
}

export const CustomFormikInput: FC<CustomFormikInputProps> = ({
  field,
  form,
  customInputProps,
  ...props
}) => (
  <div className="w-full min-h-[60px] max-h-[72px]">
    <Input {...field} {...customInputProps} {...props} />
    {form?.touched[field.name] && form?.errors[field.name] && (
      <div className="text-[11px] text-red-700 px-[3px] pt-[4px] pb-2">
        {Array.isArray(form.errors[field.name])
          ? //@ts-ignore
            form.errors[field.name].map((error, index) => (
              <span className="" key={index}>
                {error}
              </span>
            ))
          : form.errors[field.name]}
      </div>
    )}
  </div>
);
