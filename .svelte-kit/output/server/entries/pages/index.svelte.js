import { c as create_ssr_component, d as createEventDispatcher, b as add_attribute, e as escape, n as noop, f as safe_not_equal, a as subscribe, h as set_store_value, v as validate_component, i as is_promise } from "../../_app/immutable/chunks/index-db601f46.js";
import { T as Table } from "../../_app/immutable/chunks/Table-b92e6e46.js";
const InputForm_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-17xjivj{border-radius:5px;padding:20px}label.svelte-17xjivj{padding-left:1%;float:left}input[type='text'].svelte-17xjivj{width:100%;padding:12px 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;border-radius:4px;box-sizing:border-box}input[type='submit'].svelte-17xjivj{width:100%;background-color:#0044ff;color:white;padding:14px 20px;margin:8px 0;border:none;border-radius:4px;cursor:pointer}input[type='submit'].svelte-17xjivj:hover{background-color:#45a049}",
  map: null
};
const InputForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let name = "";
  let type = "";
  let age = 1;
  $$result.css.add(css);
  return `<div class="${"svelte-17xjivj"}"><label for="${"name"}" class="${"svelte-17xjivj"}">Name</label>
	<input type="${"text"}" id="${"name"}" name="${"name"}" placeholder="${"Pet name.."}" class="${"svelte-17xjivj"}"${add_attribute("value", name, 0)}>

	<label for="${"type"}" class="${"svelte-17xjivj"}">Type</label>
	<input type="${"text"}" id="${"type"}" name="${"type"}" placeholder="${"Cat/Dog"}" class="${"svelte-17xjivj"}"${add_attribute("value", type, 0)}>

	<label for="${"age"}" class="${"svelte-17xjivj"}">Age</label>
	<input type="${"number"}" id="${"age"}" name="${"age"}" placeholder="${"1"}"${add_attribute("value", age, 0)}>

	<input type="${"submit"}" value="${"Add " + escape(name, true)}" class="${"svelte-17xjivj"}">
</div>`;
});
const subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
const pets = writable([]);
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $pets, $$unsubscribe_pets;
  $$unsubscribe_pets = subscribe(pets, (value) => $pets = value);
  const animals_service = `${"http://localhost:8080/"}`;
  console.log("getAnimals");
  const response = fetch(animals_service + "animals/").then((data) => data.json());
  response.then((data) => set_store_value(pets, $pets = data, $pets)).catch((error) => console.log(error));
  $$unsubscribe_pets();
  return `<h1>Welcome to SvelteKit</h1>
${validate_component(InputForm, "InputForm").$$render($$result, {}, {}, {})}

${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
	Fetching ..
`;
    }
    return function(data) {
      return `
	
	${validate_component(Table, "Table").$$render($$result, { animals: $pets }, {}, {})}
`;
    }();
  }(response)}

`;
});
export {
  Routes as default
};
