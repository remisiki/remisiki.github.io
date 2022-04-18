import $ from 'jquery';

function unfold(id) {
  $(`#${id}`).toggle();
}

function Folder({name, id}) {
  return (
    <a onClick={() => unfold(id)} className="fold">
      {name}
    </a>
  );
}

export default Folder;