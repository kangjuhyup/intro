import { Tooltip, Text, Center, rem, TextInput } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";

interface TooltipInputProps {
  placeholder: string;
  label?: string;
  tooltip: string;
  w?: string;
  h?: string;
}

const TooltipInput = ({
  placeholder,
  label,
  tooltip,
  w,
  h,
}: TooltipInputProps) => {
  return (
    <TextInput
      w={w}
      h={h}
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
