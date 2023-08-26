import { useTheme } from "styled-components";
import { Container } from "./styles.js";
import { Plus, Times } from "../../icons";

/*
 * editMode isCreation      bg    border  color icon
 * true     true        =>  -     dotted  L_5   +
 * true     false       =>  L_6   line    L_1   x
 * false    ?           =>  d_10  none    L_1   none
 *
 * editMode true - modo de edicao do db
 *    isCreation true - new elem no db
 *    isCreation false - new elem no db
 * editMode false - modo de nao edicao do db
 */

export function Tag({
  content = "",
  editMode = false,
  isCreation = false,
  onClick = () => {},
}) {
  let Icon = (() => {
    if (editMode) {
      if (isCreation) {
        return Plus;
      } else {
        return Times;
      }
    }
  })();

  return (
    <Container editMode={editMode} isCreation={isCreation}>
      <div id="content">{content ? content : "Tag"}</div>

      {Icon && (
        <div id="icon" onClick={handleOnClick}>
          <Icon />
        </div>
      )}
    </Container>
  );

  function handleOnClick(e) {
    onClick(e);
  }
}
