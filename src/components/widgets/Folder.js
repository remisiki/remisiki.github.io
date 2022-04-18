import $ from 'jquery';

function unfold(id) {
  $(`#${id}`).toggle();
}

function Folder({name, id}) {
  return (
    <span onClick={() => unfold(id)} className="no-href-a">
      {name}
    </span>
  );
}

export default Folder;