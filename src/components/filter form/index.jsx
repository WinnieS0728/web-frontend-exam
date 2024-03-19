import React from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useForm } from "react-hook-form";
import { useOptions } from "./options.query";
import { useSearchParams } from "react-router-dom";

export default function FilterForm() {
  const { data: options, isPending, isError, error } = useOptions();

  const [search, setSearch] = useSearchParams();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      company_name: "",
      education_level: search.get("education_level") || "0",
      salary_level: search.get("salary_level") || "0",
    },
  });

  function onSubmit(data) {
    // console.log(data);
    setSearch(data, {
      replace: true,
    });
  }

  if (isPending) {
    return <p>loading...</p>;
  }

  if (isError) {
    return <p>error: {error}</p>;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='grid grid-cols-[repeat(4,1fr)_auto] gap-2'
    >
      <Controller
        control={control}
        name='company_name'
        render={({ field: { onChange, value } }) => (
          <TextField
            label='公司名稱'
            placeholder='請輸入公司名稱'
            defaultValue={value}
            className='col-span-2'
            onChange={onChange}
          />
        )}
      />

      <Controller
        control={control}
        name='education_level'
        render={({ field: { onChange, value } }) => (
          <TextField
            select
            label='教育程度'
            onChange={onChange}
            value={value}
          >
            {options?.education.map((education) => (
              <MenuItem
                key={education.id}
                value={education.id}
              >
                {education.label}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
      <Controller
        control={control}
        name='salary_level'
        render={({ field: { onChange, value } }) => (
          <TextField
            select
            label='薪水範圍'
            onChange={onChange}
            value={value}
          >
            {options?.salary.map((salary) => (
              <MenuItem
                key={salary.id}
                value={salary.id}
              >
                {salary.label}
              </MenuItem>
            ))}
          </TextField>
        )}
      />

      <Button
        type='submit'
        variant='contained'
        style={{
          backgroundColor: "#999",
          whiteSpace: "nowrap",
          padding: "8px 22px",
        }}
      >
        條件搜尋
      </Button>
    </form>
  );
}
