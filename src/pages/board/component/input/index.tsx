import {
  Avatar,
  Button,
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
import classes from "../../../../Input.module.css";
import { useDisclosure } from "@mantine/hooks";

const CommentInput = () => {
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
  } = useInput();

  useEffect(() => {
    setAvartar(avartarList[0]);
  }, [avartarList]);

  useEffect(() => {
    if (addResponse) {
      toggle();
    }
  }, [addResponse]);

  const options = avartarList.map((item) => (
    <Combobox.Option value={item} key={item} active={item === avartar}>
      <Group gap="xs">
        <Avatar src={item} size={30} />
      </Group>
    </Combobox.Option>
  ));

  return (
    <Container>
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
              w="20vw"
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
          w="50vw"
          classNames={classes}
          value={name || ""}
          label="이름"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="홍길동"
        />
      </Group>
      <Group pb={10} gap={10}>
        <TooltipInput
          classNames={classes}
          label="이메일"
          w="50vw"
          placeholder="이메일을 입력하세요"
          tooltip="입력하신 이메일로 인증메일이 전송됩니다."
          value={email || ""}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <Select
          comboboxProps={{ withinPortal: true }}
          data={["크립토", "캐리버스", "더즌", "기타"]}
          placeholder="선택하세요."
          label="소속"
          onSelect={(e) => {
            setCompany(e.currentTarget.value);
          }}
          classNames={classes}
        />
        {/* <PasswordInput
          w="30vw"
          placeholder="댓글 비밀번호"
          value={pwd || ""}
          onChange={(e) => setPwd(e.currentTarget.value)}
        /> */}
      </Group>
      <TextInput
        pb="md"
        classNames={classes}
        label="메세지"
        value={comment || ""}
        onChange={(e) => setComment(e.currentTarget.value)}
      />{" "}
      <Button
        variant="white"
        color="dark"
        onClick={() => {
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
        메세지 보내기
      </Button>
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
