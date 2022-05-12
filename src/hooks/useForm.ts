import { ChangeEvent, useState } from 'react';

export function useForm<T>(initialValue: T) {
  const [values, setValues] = useState<T>(initialValue);

  function resetToInitialValue() {
    setValues(initialValue);
  }

  return {
    values,
    resetToInitialValue,
    handleChange: (event: ChangeEvent<HTMLInputElement>) => {
      setValues({
        ...values,
        [event.target.name]: event.target.value
      });
    }
  };
}
