import {
  ActionIcon,
  Avatar,
  Combobox,
  Container,
  Dialog,
  Group,
  InputBase,
  Select,
  Text,
  TextInput,
} from "@mantine/core";
import { useEffect } from "react";
import TooltipInput from "../../../../common/component/input/tooltip";
import useAvartar from "../../hook/useAvartar";
import useInput from "../../hook/useInput";
import { useDisclosure } from "@mantine/hooks";
import useErrorStore from "../../../../store/useError";
import { IconSend } from "@tabler/icons-react";

interface CommentInputProps {
  onConfirm: () => void;
}

const CommentInput = ({ onConfirm }: CommentInputProps) => {
  const { setError } = useErrorStore();
  const { avartarList, combobox } = useAvartar();
  const [opened, { toggle, close }] = useDisclosure(false);
  const {
    addComment,
    addResponse,
    setComment,
    comment,
    setName,
    name,
    setEmail,
    email,
    setCompany,
    company,
    setAvartar,
    avartar,
    observeComment,
    confirmComment,
    loading,
  } = useInput();

  useEffect(() => {
    setAvartar(avartarList[0]);
  }, [avartarList]);

  useEffect(() => {
    if (addResponse && email) {
      toggle();
      observeComment(email);
    }
  }, [addResponse]);

  useEffect(() => {
    console.log("company =>");
    console.log(company);
  }, [company]);

  useEffect(() => {
    console.log(confirmComment);
    if (confirmComment) onConfirm();
  }, [confirmComment]);

  const options = avartarList.map((item) => (
    <Combobox.Option value={item} key={item} active={item === avartar}>
      <Group gap="xs">
        <Avatar src={item} size={30} />
      </Group>
    </Combobox.Option>
  ));

  return (
    <Container pt={20}>
      <Group gap={10}>
        <Combobox
          store={combobox}
          resetSelectionOnOptionHover
          onOptionSubmit={(val) => {
            setAvartar(val);
            combobox.updateSelectedOptionIndex("active");
          }}
        >
          <Combobox.Target targetType="button">
            <InputBase
              label="아바타"
              component="image"
              type="button"
              pointer
              rightSection={<Combobox.Chevron />}
              rightSectionPointerEvents="none"
              onClick={() => combobox.toggleDropdown()}
              styles={{
                input: {
                  paddingTop: "3px",
                  paddingBottom: "3px",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
              }}
            >
              <Container>
                <Avatar src={avartar} size={30} />
              </Container>
            </InputBase>
          </Combobox.Target>

          <Combobox.Dropdown>
            <Combobox.Options>{options}</Combobox.Options>
          </Combobox.Dropdown>
        </Combobox>
        <TextInput
          w="30vw"
          value={name || ""}
          label="이름"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="홍길동"
        />
        <Select
          comboboxProps={{ withinPortal: true }}
          data={["크립토", "캐리버스", "더즌", "기타"]}
          placeholder="선택하세요."
          label="소속"
          onChange={setCompany}
        />
      </Group>
      <TooltipInput
        label="이메일"
        w="80vw"
        placeholder="이메일을 입력하세요"
        tooltip="입력하신 이메일로 인증메일이 전송됩니다."
        value={email || ""}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <TextInput
        pb="md"
        w="80vw"
        label="메세지"
        value={comment || ""}
        onChange={(e) => setComment(e.currentTarget.value)}
      />{" "}
      <ActionIcon
        loading={loading}
        variant="default"
        w={60}
        h={30}
        onClick={() => {
          if (!name || name.length === 0) {
            setError("이름을 입력해주세요.");
            return;
          }
          if (!email || email.length === 0) {
            setError("이메일을 입력해주세요.");
            return;
          }
          if (!company || company.length === 0) {
            setError("소속을 입력해주세요.");
            return;
          }
          if (!comment || comment.length === 0) {
            setError("메세지를 입력해주세요.");
            return;
          }
          if (loading) {
            setError("인증메일 전송중이에요. 잠시 기다려주세요.");
            return;
          }
          if (name && comment && avartar && email && company)
            addComment({
              name,
              comment,
              avartar,
              email,
              company,
            });
        }}
      >
        <IconSend />
      </ActionIcon>
      <Dialog
        opened={opened}
        withCloseButton
        onClose={close}
        size="lg"
        radius="md"
      >
        <Text size="sm" mb="xs" fw={500}>
          인증메일이 발송되었어요. 확인해주세요
        </Text>
      </Dialog>
    </Container>
  );
};

export default CommentInput;
