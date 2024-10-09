import { Tooltip, Text, Center, rem, TextInput } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";

interface TooltipInputProps {
  classNames?: any;
  placeholder: string;
  label?: string;
  tooltip: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
  w?: string;
  h?: string;
}

const TooltipInput = ({
  classNames,
  placeholder,
  label,
  tooltip,
  value,
  onChange,
  w,
  h,
}: TooltipInputProps) => {
  return (
    <TextInput
      classNames={classNames}
      w={w}
      h={h}
      value={value}
      onChange={onChange}
      rightSection={
        <Tooltip
          label={tooltip}
          position="top-end"
          withArrow
          transitionProps={{ transition: "pop-bottom-right" }}
        >
          <Text component="div" c="dimmed" style={{ cursor: "help" }}>
            <Center>
              <IconInfoCircle
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </Center>
          </Text>
        </Tooltip>
      }
      label={label}
      placeholder={placeholder}
    />
  );
};

export default TooltipInput;
