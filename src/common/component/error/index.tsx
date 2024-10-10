import { useEffect } from "react";
import useErrorStore from "../../../store/useError";
import { Notification } from "@mantine/core";
import { IconX } from "@tabler/icons-react";
const GlobalError = () => {
  const { error, clearError } = useErrorStore();
  const xIcon = <IconX style={{ width: 20, height: 20 }} />;

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        clearError();
      }, 3000);
      return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머 해제
    }
  }, [error, clearError]);

  if (!error) return null;
  return (
    <Notification
      pos="fixed"
      withBorder
      bottom={10}
      right={10}
      icon={xIcon}
      color="red"
      title="Error"
      withCloseButton={false}
    >
      {error}
    </Notification>
  );
};
export default GlobalError;
