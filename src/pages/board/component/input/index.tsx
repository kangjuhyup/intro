import {
  Avatar,
  Button,
  Combobox,
  Container,
  Group,
  InputBase,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import { useEffect } from "react";
import TooltipInput from "../../../../common/component/input/tooltip";
import useAvartar from "../../hook/useAvartar";
import useInput from "../../hook/useInput";

const CommentInput = () => {
  const { avartarList, combobox } = useAvartar();
  const {
    addComment,
    setComment,
    comment,
    setName,
    name,
    setEmail,
    email,
    setPwd,
    pwd,
    setAvartar,
    avartar,
  } = useInput();

  useEffect(() => {
    setAvartar(avartarList[0]);
  }, [avartarList]);

  const options = avartarList.map((item) => (
    <Combobox.Option value={item} key={item} active={item === avartar}>
      <Group gap="xs">
        <Avatar src={item} size={30} />
      </Group>
    </Combobox.Option>
  ));

  return (
    <Container pb={30}>
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
          value={name || ""}
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="이름을 입력하세요"
        />
      </Group>
      <Group pb={10} gap={10}>
        <TooltipInput
          w="50vw"
          placeholder="이메일을 입력하세요"
          tooltip="입력하신 이메일로 인증메일이 전송됩니다."
          value={email || ""}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <PasswordInput
          w="30vw"
          placeholder="댓글 비밀번호"
          value={pwd || ""}
          onChange={(e) => setPwd(e.currentTarget.value)}
        />
      </Group>
      <TextInput
        pb="md"
        placeholder="댓글을 입력하세요"
        value={comment || ""}
        onChange={(e) => setComment(e.currentTarget.value)}
      />{" "}
      <Button
        pb="md"
        onClick={() => {
          if (name && comment && avartar && email)
            addComment({
              name,
              comment,
              avartar,
              email,
            });
        }}
      >
        댓글 달기
      </Button>
    </Container>
  );
};

export default CommentInput;
