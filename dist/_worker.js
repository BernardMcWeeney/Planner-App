var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/clsx/dist/clsx.mjs
var init_clsx = __esm({
  "node_modules/clsx/dist/clsx.mjs"() {
  }
});

// .svelte-kit/output/server/chunks/equality.js
function run_all(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i]();
  }
}
function equals(value) {
  return value === this.v;
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a !== null && typeof a === "object" || typeof a === "function";
}
function safe_equals(value) {
  return !safe_not_equal(value, this.v);
}
var is_array, index_of, array_from, define_property, get_descriptor, object_prototype, array_prototype, get_prototype_of, is_extensible, noop;
var init_equality = __esm({
  ".svelte-kit/output/server/chunks/equality.js"() {
    is_array = Array.isArray;
    index_of = Array.prototype.indexOf;
    array_from = Array.from;
    define_property = Object.defineProperty;
    get_descriptor = Object.getOwnPropertyDescriptor;
    object_prototype = Object.prototype;
    array_prototype = Array.prototype;
    get_prototype_of = Object.getPrototypeOf;
    is_extensible = Object.isExtensible;
    noop = /* @__PURE__ */ __name(() => {
    }, "noop");
    __name(run_all, "run_all");
    __name(equals, "equals");
    __name(safe_not_equal, "safe_not_equal");
    __name(safe_equals, "safe_equals");
  }
});

// .svelte-kit/output/server/chunks/index.js
function effect_update_depth_exceeded() {
  {
    throw new Error(`https://svelte.dev/e/effect_update_depth_exceeded`);
  }
}
function hydration_failed() {
  {
    throw new Error(`https://svelte.dev/e/hydration_failed`);
  }
}
function state_descriptors_fixed() {
  {
    throw new Error(`https://svelte.dev/e/state_descriptors_fixed`);
  }
}
function state_prototype_fixed() {
  {
    throw new Error(`https://svelte.dev/e/state_prototype_fixed`);
  }
}
function state_unsafe_mutation() {
  {
    throw new Error(`https://svelte.dev/e/state_unsafe_mutation`);
  }
}
function lifecycle_outside_component(name) {
  {
    throw new Error(`https://svelte.dev/e/lifecycle_outside_component`);
  }
}
function set_component_context(context2) {
  component_context = context2;
}
function push$1(props, runes = false, fn) {
  var ctx = component_context = {
    p: component_context,
    c: null,
    d: false,
    e: null,
    m: false,
    s: props,
    x: null,
    l: null
  };
  teardown(() => {
    ctx.d = true;
  });
}
function pop$1(component31) {
  const context_stack_item = component_context;
  if (context_stack_item !== null) {
    const component_effects = context_stack_item.e;
    if (component_effects !== null) {
      var previous_effect = active_effect;
      var previous_reaction = active_reaction;
      context_stack_item.e = null;
      try {
        for (var i = 0; i < component_effects.length; i++) {
          var component_effect = component_effects[i];
          set_active_effect(component_effect.effect);
          set_active_reaction(component_effect.reaction);
          effect(component_effect.fn);
        }
      } finally {
        set_active_effect(previous_effect);
        set_active_reaction(previous_reaction);
      }
    }
    component_context = context_stack_item.p;
    context_stack_item.m = true;
  }
  return (
    /** @type {T} */
    {}
  );
}
function is_runes() {
  return true;
}
function proxy(value) {
  if (typeof value !== "object" || value === null || STATE_SYMBOL in value) {
    return value;
  }
  const prototype = get_prototype_of(value);
  if (prototype !== object_prototype && prototype !== array_prototype) {
    return value;
  }
  var sources = /* @__PURE__ */ new Map();
  var is_proxied_array = is_array(value);
  var version = /* @__PURE__ */ state(0);
  var reaction = active_reaction;
  var with_parent = /* @__PURE__ */ __name((fn) => {
    var previous_reaction = active_reaction;
    set_active_reaction(reaction);
    var result = fn();
    set_active_reaction(previous_reaction);
    return result;
  }, "with_parent");
  if (is_proxied_array) {
    sources.set("length", /* @__PURE__ */ state(
      /** @type {any[]} */
      value.length
    ));
  }
  return new Proxy(
    /** @type {any} */
    value,
    {
      defineProperty(_, prop, descriptor) {
        if (!("value" in descriptor) || descriptor.configurable === false || descriptor.enumerable === false || descriptor.writable === false) {
          state_descriptors_fixed();
        }
        var s3 = sources.get(prop);
        if (s3 === void 0) {
          s3 = with_parent(() => /* @__PURE__ */ state(descriptor.value));
          sources.set(prop, s3);
        } else {
          set(
            s3,
            with_parent(() => proxy(descriptor.value))
          );
        }
        return true;
      },
      deleteProperty(target, prop) {
        var s3 = sources.get(prop);
        if (s3 === void 0) {
          if (prop in target) {
            sources.set(
              prop,
              with_parent(() => /* @__PURE__ */ state(UNINITIALIZED))
            );
            update_version(version);
          }
        } else {
          if (is_proxied_array && typeof prop === "string") {
            var ls = (
              /** @type {Source<number>} */
              sources.get("length")
            );
            var n2 = Number(prop);
            if (Number.isInteger(n2) && n2 < ls.v) {
              set(ls, n2);
            }
          }
          set(s3, UNINITIALIZED);
          update_version(version);
        }
        return true;
      },
      get(target, prop, receiver) {
        if (prop === STATE_SYMBOL) {
          return value;
        }
        var s3 = sources.get(prop);
        var exists = prop in target;
        if (s3 === void 0 && (!exists || get_descriptor(target, prop)?.writable)) {
          s3 = with_parent(() => /* @__PURE__ */ state(proxy(exists ? target[prop] : UNINITIALIZED)));
          sources.set(prop, s3);
        }
        if (s3 !== void 0) {
          var v = get(s3);
          return v === UNINITIALIZED ? void 0 : v;
        }
        return Reflect.get(target, prop, receiver);
      },
      getOwnPropertyDescriptor(target, prop) {
        var descriptor = Reflect.getOwnPropertyDescriptor(target, prop);
        if (descriptor && "value" in descriptor) {
          var s3 = sources.get(prop);
          if (s3) descriptor.value = get(s3);
        } else if (descriptor === void 0) {
          var source2 = sources.get(prop);
          var value2 = source2?.v;
          if (source2 !== void 0 && value2 !== UNINITIALIZED) {
            return {
              enumerable: true,
              configurable: true,
              value: value2,
              writable: true
            };
          }
        }
        return descriptor;
      },
      has(target, prop) {
        if (prop === STATE_SYMBOL) {
          return true;
        }
        var s3 = sources.get(prop);
        var has = s3 !== void 0 && s3.v !== UNINITIALIZED || Reflect.has(target, prop);
        if (s3 !== void 0 || active_effect !== null && (!has || get_descriptor(target, prop)?.writable)) {
          if (s3 === void 0) {
            s3 = with_parent(() => /* @__PURE__ */ state(has ? proxy(target[prop]) : UNINITIALIZED));
            sources.set(prop, s3);
          }
          var value2 = get(s3);
          if (value2 === UNINITIALIZED) {
            return false;
          }
        }
        return has;
      },
      set(target, prop, value2, receiver) {
        var s3 = sources.get(prop);
        var has = prop in target;
        if (is_proxied_array && prop === "length") {
          for (var i = value2; i < /** @type {Source<number>} */
          s3.v; i += 1) {
            var other_s = sources.get(i + "");
            if (other_s !== void 0) {
              set(other_s, UNINITIALIZED);
            } else if (i in target) {
              other_s = with_parent(() => /* @__PURE__ */ state(UNINITIALIZED));
              sources.set(i + "", other_s);
            }
          }
        }
        if (s3 === void 0) {
          if (!has || get_descriptor(target, prop)?.writable) {
            s3 = with_parent(() => /* @__PURE__ */ state(void 0));
            set(
              s3,
              with_parent(() => proxy(value2))
            );
            sources.set(prop, s3);
          }
        } else {
          has = s3.v !== UNINITIALIZED;
          set(
            s3,
            with_parent(() => proxy(value2))
          );
        }
        var descriptor = Reflect.getOwnPropertyDescriptor(target, prop);
        if (descriptor?.set) {
          descriptor.set.call(receiver, value2);
        }
        if (!has) {
          if (is_proxied_array && typeof prop === "string") {
            var ls = (
              /** @type {Source<number>} */
              sources.get("length")
            );
            var n2 = Number(prop);
            if (Number.isInteger(n2) && n2 >= ls.v) {
              set(ls, n2 + 1);
            }
          }
          update_version(version);
        }
        return true;
      },
      ownKeys(target) {
        get(version);
        var own_keys = Reflect.ownKeys(target).filter((key22) => {
          var source3 = sources.get(key22);
          return source3 === void 0 || source3.v !== UNINITIALIZED;
        });
        for (var [key2, source2] of sources) {
          if (source2.v !== UNINITIALIZED && !(key2 in target)) {
            own_keys.push(key2);
          }
        }
        return own_keys;
      },
      setPrototypeOf() {
        state_prototype_fixed();
      }
    }
  );
}
function update_version(signal, d = 1) {
  set(signal, signal.v + d);
}
function destroy_derived_effects(derived) {
  var effects = derived.effects;
  if (effects !== null) {
    derived.effects = null;
    for (var i = 0; i < effects.length; i += 1) {
      destroy_effect(
        /** @type {Effect} */
        effects[i]
      );
    }
  }
}
function get_derived_parent_effect(derived) {
  var parent = derived.parent;
  while (parent !== null) {
    if ((parent.f & DERIVED) === 0) {
      return (
        /** @type {Effect} */
        parent
      );
    }
    parent = parent.parent;
  }
  return null;
}
function execute_derived(derived) {
  var value;
  var prev_active_effect = active_effect;
  set_active_effect(get_derived_parent_effect(derived));
  {
    try {
      destroy_derived_effects(derived);
      value = update_reaction(derived);
    } finally {
      set_active_effect(prev_active_effect);
    }
  }
  return value;
}
function update_derived(derived) {
  var value = execute_derived(derived);
  if (!derived.equals(value)) {
    derived.v = value;
    derived.wv = increment_write_version();
  }
  if (is_destroying_effect) return;
  var status = (skip_reaction || (derived.f & UNOWNED) !== 0) && derived.deps !== null ? MAYBE_DIRTY : CLEAN;
  set_signal_status(derived, status);
}
function source(v, stack) {
  var signal = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v,
    reactions: null,
    equals,
    rv: 0,
    wv: 0
  };
  return signal;
}
// @__NO_SIDE_EFFECTS__
function state(v, stack) {
  const s3 = source(v);
  push_reaction_value(s3);
  return s3;
}
// @__NO_SIDE_EFFECTS__
function mutable_source(initial_value, immutable2 = false) {
  const s3 = source(initial_value);
  if (!immutable2) {
    s3.equals = safe_equals;
  }
  return s3;
}
function set(source2, value, should_proxy = false) {
  if (active_reaction !== null && !untracking && is_runes() && (active_reaction.f & (DERIVED | BLOCK_EFFECT)) !== 0 && !reaction_sources?.includes(source2)) {
    state_unsafe_mutation();
  }
  let new_value = should_proxy ? proxy(value) : value;
  return internal_set(source2, new_value);
}
function internal_set(source2, value) {
  if (!source2.equals(value)) {
    var old_value = source2.v;
    if (is_destroying_effect) {
      old_values.set(source2, value);
    } else {
      old_values.set(source2, old_value);
    }
    source2.v = value;
    if ((source2.f & DERIVED) !== 0) {
      if ((source2.f & DIRTY) !== 0) {
        execute_derived(
          /** @type {Derived} */
          source2
        );
      }
      set_signal_status(source2, (source2.f & UNOWNED) === 0 ? CLEAN : MAYBE_DIRTY);
    }
    source2.wv = increment_write_version();
    mark_reactions(source2, DIRTY);
    if (active_effect !== null && (active_effect.f & CLEAN) !== 0 && (active_effect.f & (BRANCH_EFFECT | ROOT_EFFECT)) === 0) {
      if (untracked_writes === null) {
        set_untracked_writes([source2]);
      } else {
        untracked_writes.push(source2);
      }
    }
  }
  return value;
}
function mark_reactions(signal, status) {
  var reactions = signal.reactions;
  if (reactions === null) return;
  var length = reactions.length;
  for (var i = 0; i < length; i++) {
    var reaction = reactions[i];
    var flags = reaction.f;
    if ((flags & DIRTY) !== 0) continue;
    set_signal_status(reaction, status);
    if ((flags & (CLEAN | UNOWNED)) !== 0) {
      if ((flags & DERIVED) !== 0) {
        mark_reactions(
          /** @type {Derived} */
          reaction,
          MAYBE_DIRTY
        );
      } else {
        schedule_effect(
          /** @type {Effect} */
          reaction
        );
      }
    }
  }
}
function init_operations() {
  if ($window !== void 0) {
    return;
  }
  $window = window;
  var element_prototype = Element.prototype;
  var node_prototype = Node.prototype;
  var text_prototype = Text.prototype;
  first_child_getter = get_descriptor(node_prototype, "firstChild").get;
  next_sibling_getter = get_descriptor(node_prototype, "nextSibling").get;
  if (is_extensible(element_prototype)) {
    element_prototype.__click = void 0;
    element_prototype.__className = void 0;
    element_prototype.__attributes = null;
    element_prototype.__style = void 0;
    element_prototype.__e = void 0;
  }
  if (is_extensible(text_prototype)) {
    text_prototype.__t = void 0;
  }
}
function create_text(value = "") {
  return document.createTextNode(value);
}
// @__NO_SIDE_EFFECTS__
function get_first_child(node) {
  return first_child_getter.call(node);
}
// @__NO_SIDE_EFFECTS__
function get_next_sibling(node) {
  return next_sibling_getter.call(node);
}
function clear_text_content(node) {
  node.textContent = "";
}
function push_effect(effect2, parent_effect) {
  var parent_last = parent_effect.last;
  if (parent_last === null) {
    parent_effect.last = parent_effect.first = effect2;
  } else {
    parent_last.next = effect2;
    effect2.prev = parent_last;
    parent_effect.last = effect2;
  }
}
function create_effect(type, fn, sync, push2 = true) {
  var parent = active_effect;
  var effect2 = {
    ctx: component_context,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: type | DIRTY,
    first: null,
    fn,
    last: null,
    next: null,
    parent,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (sync) {
    try {
      update_effect(effect2);
      effect2.f |= EFFECT_RAN;
    } catch (e3) {
      destroy_effect(effect2);
      throw e3;
    }
  } else if (fn !== null) {
    schedule_effect(effect2);
  }
  var inert = sync && effect2.deps === null && effect2.first === null && effect2.nodes_start === null && effect2.teardown === null && (effect2.f & (EFFECT_HAS_DERIVED | BOUNDARY_EFFECT)) === 0;
  if (!inert && push2) {
    if (parent !== null) {
      push_effect(effect2, parent);
    }
    if (active_reaction !== null && (active_reaction.f & DERIVED) !== 0) {
      var derived = (
        /** @type {Derived} */
        active_reaction
      );
      (derived.effects ??= []).push(effect2);
    }
  }
  return effect2;
}
function teardown(fn) {
  const effect2 = create_effect(RENDER_EFFECT, null, false);
  set_signal_status(effect2, CLEAN);
  effect2.teardown = fn;
  return effect2;
}
function component_root(fn) {
  const effect2 = create_effect(ROOT_EFFECT, fn, true);
  return (options2 = {}) => {
    return new Promise((fulfil) => {
      if (options2.outro) {
        pause_effect(effect2, () => {
          destroy_effect(effect2);
          fulfil(void 0);
        });
      } else {
        destroy_effect(effect2);
        fulfil(void 0);
      }
    });
  };
}
function effect(fn) {
  return create_effect(EFFECT, fn, false);
}
function branch(fn, push2 = true) {
  return create_effect(RENDER_EFFECT | BRANCH_EFFECT, fn, true, push2);
}
function execute_effect_teardown(effect2) {
  var teardown2 = effect2.teardown;
  if (teardown2 !== null) {
    const previously_destroying_effect = is_destroying_effect;
    const previous_reaction = active_reaction;
    set_is_destroying_effect(true);
    set_active_reaction(null);
    try {
      teardown2.call(null);
    } finally {
      set_is_destroying_effect(previously_destroying_effect);
      set_active_reaction(previous_reaction);
    }
  }
}
function destroy_effect_children(signal, remove_dom = false) {
  var effect2 = signal.first;
  signal.first = signal.last = null;
  while (effect2 !== null) {
    var next = effect2.next;
    if ((effect2.f & ROOT_EFFECT) !== 0) {
      effect2.parent = null;
    } else {
      destroy_effect(effect2, remove_dom);
    }
    effect2 = next;
  }
}
function destroy_block_effect_children(signal) {
  var effect2 = signal.first;
  while (effect2 !== null) {
    var next = effect2.next;
    if ((effect2.f & BRANCH_EFFECT) === 0) {
      destroy_effect(effect2);
    }
    effect2 = next;
  }
}
function destroy_effect(effect2, remove_dom = true) {
  var removed = false;
  if ((remove_dom || (effect2.f & HEAD_EFFECT) !== 0) && effect2.nodes_start !== null && effect2.nodes_end !== null) {
    remove_effect_dom(
      effect2.nodes_start,
      /** @type {TemplateNode} */
      effect2.nodes_end
    );
    removed = true;
  }
  destroy_effect_children(effect2, remove_dom && !removed);
  remove_reactions(effect2, 0);
  set_signal_status(effect2, DESTROYED);
  var transitions = effect2.transitions;
  if (transitions !== null) {
    for (const transition of transitions) {
      transition.stop();
    }
  }
  execute_effect_teardown(effect2);
  var parent = effect2.parent;
  if (parent !== null && parent.first !== null) {
    unlink_effect(effect2);
  }
  effect2.next = effect2.prev = effect2.teardown = effect2.ctx = effect2.deps = effect2.fn = effect2.nodes_start = effect2.nodes_end = null;
}
function remove_effect_dom(node, end) {
  while (node !== null) {
    var next = node === end ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ get_next_sibling(node)
    );
    node.remove();
    node = next;
  }
}
function unlink_effect(effect2) {
  var parent = effect2.parent;
  var prev = effect2.prev;
  var next = effect2.next;
  if (prev !== null) prev.next = next;
  if (next !== null) next.prev = prev;
  if (parent !== null) {
    if (parent.first === effect2) parent.first = next;
    if (parent.last === effect2) parent.last = prev;
  }
}
function pause_effect(effect2, callback) {
  var transitions = [];
  pause_children(effect2, transitions, true);
  run_out_transitions(transitions, () => {
    destroy_effect(effect2);
    if (callback) callback();
  });
}
function run_out_transitions(transitions, fn) {
  var remaining = transitions.length;
  if (remaining > 0) {
    var check = /* @__PURE__ */ __name(() => --remaining || fn(), "check");
    for (var transition of transitions) {
      transition.out(check);
    }
  } else {
    fn();
  }
}
function pause_children(effect2, transitions, local) {
  if ((effect2.f & INERT) !== 0) return;
  effect2.f ^= INERT;
  if (effect2.transitions !== null) {
    for (const transition of effect2.transitions) {
      if (transition.is_global || local) {
        transitions.push(transition);
      }
    }
  }
  var child = effect2.first;
  while (child !== null) {
    var sibling = child.next;
    var transparent = (child.f & EFFECT_TRANSPARENT) !== 0 || (child.f & BRANCH_EFFECT) !== 0;
    pause_children(child, transitions, transparent ? local : false);
    child = sibling;
  }
}
function run_micro_tasks() {
  var tasks = micro_tasks;
  micro_tasks = [];
  run_all(tasks);
}
function run_idle_tasks() {
  var tasks = idle_tasks;
  idle_tasks = [];
  run_all(tasks);
}
function flush_tasks() {
  if (micro_tasks.length > 0) {
    run_micro_tasks();
  }
  if (idle_tasks.length > 0) {
    run_idle_tasks();
  }
}
function handle_error(error2) {
  var effect2 = (
    /** @type {Effect} */
    active_effect
  );
  if ((effect2.f & EFFECT_RAN) === 0) {
    if ((effect2.f & BOUNDARY_EFFECT) === 0) {
      throw error2;
    }
    effect2.fn(error2);
  } else {
    invoke_error_boundary(error2, effect2);
  }
}
function invoke_error_boundary(error2, effect2) {
  while (effect2 !== null) {
    if ((effect2.f & BOUNDARY_EFFECT) !== 0) {
      try {
        effect2.fn(error2);
        return;
      } catch {
      }
    }
    effect2 = effect2.parent;
  }
  throw error2;
}
function set_is_destroying_effect(value) {
  is_destroying_effect = value;
}
function set_active_reaction(reaction) {
  active_reaction = reaction;
}
function set_active_effect(effect2) {
  active_effect = effect2;
}
function push_reaction_value(value) {
  if (active_reaction !== null && active_reaction.f & EFFECT_IS_UPDATING) {
    if (reaction_sources === null) {
      reaction_sources = [value];
    } else {
      reaction_sources.push(value);
    }
  }
}
function set_untracked_writes(value) {
  untracked_writes = value;
}
function increment_write_version() {
  return ++write_version;
}
function check_dirtiness(reaction) {
  var flags = reaction.f;
  if ((flags & DIRTY) !== 0) {
    return true;
  }
  if ((flags & MAYBE_DIRTY) !== 0) {
    var dependencies = reaction.deps;
    var is_unowned = (flags & UNOWNED) !== 0;
    if (dependencies !== null) {
      var i;
      var dependency;
      var is_disconnected = (flags & DISCONNECTED) !== 0;
      var is_unowned_connected = is_unowned && active_effect !== null && !skip_reaction;
      var length = dependencies.length;
      if (is_disconnected || is_unowned_connected) {
        var derived = (
          /** @type {Derived} */
          reaction
        );
        var parent = derived.parent;
        for (i = 0; i < length; i++) {
          dependency = dependencies[i];
          if (is_disconnected || !dependency?.reactions?.includes(derived)) {
            (dependency.reactions ??= []).push(derived);
          }
        }
        if (is_disconnected) {
          derived.f ^= DISCONNECTED;
        }
        if (is_unowned_connected && parent !== null && (parent.f & UNOWNED) === 0) {
          derived.f ^= UNOWNED;
        }
      }
      for (i = 0; i < length; i++) {
        dependency = dependencies[i];
        if (check_dirtiness(
          /** @type {Derived} */
          dependency
        )) {
          update_derived(
            /** @type {Derived} */
            dependency
          );
        }
        if (dependency.wv > reaction.wv) {
          return true;
        }
      }
    }
    if (!is_unowned || active_effect !== null && !skip_reaction) {
      set_signal_status(reaction, CLEAN);
    }
  }
  return false;
}
function schedule_possible_effect_self_invalidation(signal, effect2, root2 = true) {
  var reactions = signal.reactions;
  if (reactions === null) return;
  for (var i = 0; i < reactions.length; i++) {
    var reaction = reactions[i];
    if (reaction_sources?.includes(signal)) continue;
    if ((reaction.f & DERIVED) !== 0) {
      schedule_possible_effect_self_invalidation(
        /** @type {Derived} */
        reaction,
        effect2,
        false
      );
    } else if (effect2 === reaction) {
      if (root2) {
        set_signal_status(reaction, DIRTY);
      } else if ((reaction.f & CLEAN) !== 0) {
        set_signal_status(reaction, MAYBE_DIRTY);
      }
      schedule_effect(
        /** @type {Effect} */
        reaction
      );
    }
  }
}
function update_reaction(reaction) {
  var previous_deps = new_deps;
  var previous_skipped_deps = skipped_deps;
  var previous_untracked_writes = untracked_writes;
  var previous_reaction = active_reaction;
  var previous_skip_reaction = skip_reaction;
  var previous_reaction_sources = reaction_sources;
  var previous_component_context = component_context;
  var previous_untracking = untracking;
  var flags = reaction.f;
  new_deps = /** @type {null | Value[]} */
  null;
  skipped_deps = 0;
  untracked_writes = null;
  skip_reaction = (flags & UNOWNED) !== 0 && (untracking || !is_updating_effect || active_reaction === null);
  active_reaction = (flags & (BRANCH_EFFECT | ROOT_EFFECT)) === 0 ? reaction : null;
  reaction_sources = null;
  set_component_context(reaction.ctx);
  untracking = false;
  read_version++;
  reaction.f |= EFFECT_IS_UPDATING;
  try {
    var result = (
      /** @type {Function} */
      (0, reaction.fn)()
    );
    var deps = reaction.deps;
    if (new_deps !== null) {
      var i;
      remove_reactions(reaction, skipped_deps);
      if (deps !== null && skipped_deps > 0) {
        deps.length = skipped_deps + new_deps.length;
        for (i = 0; i < new_deps.length; i++) {
          deps[skipped_deps + i] = new_deps[i];
        }
      } else {
        reaction.deps = deps = new_deps;
      }
      if (!skip_reaction) {
        for (i = skipped_deps; i < deps.length; i++) {
          (deps[i].reactions ??= []).push(reaction);
        }
      }
    } else if (deps !== null && skipped_deps < deps.length) {
      remove_reactions(reaction, skipped_deps);
      deps.length = skipped_deps;
    }
    if (is_runes() && untracked_writes !== null && !untracking && deps !== null && (reaction.f & (DERIVED | MAYBE_DIRTY | DIRTY)) === 0) {
      for (i = 0; i < /** @type {Source[]} */
      untracked_writes.length; i++) {
        schedule_possible_effect_self_invalidation(
          untracked_writes[i],
          /** @type {Effect} */
          reaction
        );
      }
    }
    if (previous_reaction !== null && previous_reaction !== reaction) {
      read_version++;
      if (untracked_writes !== null) {
        if (previous_untracked_writes === null) {
          previous_untracked_writes = untracked_writes;
        } else {
          previous_untracked_writes.push(.../** @type {Source[]} */
          untracked_writes);
        }
      }
    }
    return result;
  } catch (error2) {
    handle_error(error2);
  } finally {
    new_deps = previous_deps;
    skipped_deps = previous_skipped_deps;
    untracked_writes = previous_untracked_writes;
    active_reaction = previous_reaction;
    skip_reaction = previous_skip_reaction;
    reaction_sources = previous_reaction_sources;
    set_component_context(previous_component_context);
    untracking = previous_untracking;
    reaction.f ^= EFFECT_IS_UPDATING;
  }
}
function remove_reaction(signal, dependency) {
  let reactions = dependency.reactions;
  if (reactions !== null) {
    var index31 = index_of.call(reactions, signal);
    if (index31 !== -1) {
      var new_length = reactions.length - 1;
      if (new_length === 0) {
        reactions = dependency.reactions = null;
      } else {
        reactions[index31] = reactions[new_length];
        reactions.pop();
      }
    }
  }
  if (reactions === null && (dependency.f & DERIVED) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (new_deps === null || !new_deps.includes(dependency))) {
    set_signal_status(dependency, MAYBE_DIRTY);
    if ((dependency.f & (UNOWNED | DISCONNECTED)) === 0) {
      dependency.f ^= DISCONNECTED;
    }
    destroy_derived_effects(
      /** @type {Derived} **/
      dependency
    );
    remove_reactions(
      /** @type {Derived} **/
      dependency,
      0
    );
  }
}
function remove_reactions(signal, start_index) {
  var dependencies = signal.deps;
  if (dependencies === null) return;
  for (var i = start_index; i < dependencies.length; i++) {
    remove_reaction(signal, dependencies[i]);
  }
}
function update_effect(effect2) {
  var flags = effect2.f;
  if ((flags & DESTROYED) !== 0) {
    return;
  }
  set_signal_status(effect2, CLEAN);
  var previous_effect = active_effect;
  var was_updating_effect = is_updating_effect;
  active_effect = effect2;
  is_updating_effect = true;
  try {
    if ((flags & BLOCK_EFFECT) !== 0) {
      destroy_block_effect_children(effect2);
    } else {
      destroy_effect_children(effect2);
    }
    execute_effect_teardown(effect2);
    var teardown2 = update_reaction(effect2);
    effect2.teardown = typeof teardown2 === "function" ? teardown2 : null;
    effect2.wv = write_version;
    var deps = effect2.deps;
    var dep;
    if (DEV && tracing_mode_flag && (effect2.f & DIRTY) !== 0 && deps !== null) ;
    if (DEV) ;
  } finally {
    is_updating_effect = was_updating_effect;
    active_effect = previous_effect;
  }
}
function infinite_loop_guard() {
  try {
    effect_update_depth_exceeded();
  } catch (error2) {
    if (last_scheduled_effect !== null) {
      {
        invoke_error_boundary(error2, last_scheduled_effect);
      }
    } else {
      throw error2;
    }
  }
}
function flush_queued_root_effects() {
  var was_updating_effect = is_updating_effect;
  try {
    var flush_count = 0;
    is_updating_effect = true;
    while (queued_root_effects.length > 0) {
      if (flush_count++ > 1e3) {
        infinite_loop_guard();
      }
      var root_effects = queued_root_effects;
      var length = root_effects.length;
      queued_root_effects = [];
      for (var i = 0; i < length; i++) {
        var collected_effects = process_effects(root_effects[i]);
        flush_queued_effects(collected_effects);
      }
      old_values.clear();
    }
  } finally {
    is_flushing = false;
    is_updating_effect = was_updating_effect;
    last_scheduled_effect = null;
  }
}
function flush_queued_effects(effects) {
  var length = effects.length;
  if (length === 0) return;
  for (var i = 0; i < length; i++) {
    var effect2 = effects[i];
    if ((effect2.f & (DESTROYED | INERT)) === 0) {
      if (check_dirtiness(effect2)) {
        update_effect(effect2);
        if (effect2.deps === null && effect2.first === null && effect2.nodes_start === null) {
          if (effect2.teardown === null) {
            unlink_effect(effect2);
          } else {
            effect2.fn = null;
          }
        }
      }
    }
  }
}
function schedule_effect(signal) {
  if (!is_flushing) {
    is_flushing = true;
    queueMicrotask(flush_queued_root_effects);
  }
  var effect2 = last_scheduled_effect = signal;
  while (effect2.parent !== null) {
    effect2 = effect2.parent;
    var flags = effect2.f;
    if ((flags & (ROOT_EFFECT | BRANCH_EFFECT)) !== 0) {
      if ((flags & CLEAN) === 0) return;
      effect2.f ^= CLEAN;
    }
  }
  queued_root_effects.push(effect2);
}
function process_effects(root2) {
  var effects = [];
  var effect2 = root2;
  while (effect2 !== null) {
    var flags = effect2.f;
    var is_branch = (flags & (BRANCH_EFFECT | ROOT_EFFECT)) !== 0;
    var is_skippable_branch = is_branch && (flags & CLEAN) !== 0;
    if (!is_skippable_branch && (flags & INERT) === 0) {
      if ((flags & EFFECT) !== 0) {
        effects.push(effect2);
      } else if (is_branch) {
        effect2.f ^= CLEAN;
      } else {
        if (check_dirtiness(effect2)) {
          update_effect(effect2);
        }
      }
      var child = effect2.first;
      if (child !== null) {
        effect2 = child;
        continue;
      }
    }
    var parent = effect2.parent;
    effect2 = effect2.next;
    while (effect2 === null && parent !== null) {
      effect2 = parent.next;
      parent = parent.parent;
    }
  }
  return effects;
}
function flushSync(fn) {
  var result;
  while (true) {
    flush_tasks();
    if (queued_root_effects.length === 0) {
      return (
        /** @type {T} */
        result
      );
    }
    is_flushing = true;
    flush_queued_root_effects();
  }
}
function get(signal) {
  var flags = signal.f;
  var is_derived = (flags & DERIVED) !== 0;
  if (active_reaction !== null && !untracking) {
    if (!reaction_sources?.includes(signal)) {
      var deps = active_reaction.deps;
      if (signal.rv < read_version) {
        signal.rv = read_version;
        if (new_deps === null && deps !== null && deps[skipped_deps] === signal) {
          skipped_deps++;
        } else if (new_deps === null) {
          new_deps = [signal];
        } else if (!skip_reaction || !new_deps.includes(signal)) {
          new_deps.push(signal);
        }
      }
    }
  } else if (is_derived && /** @type {Derived} */
  signal.deps === null && /** @type {Derived} */
  signal.effects === null) {
    var derived = (
      /** @type {Derived} */
      signal
    );
    var parent = derived.parent;
    if (parent !== null && (parent.f & UNOWNED) === 0) {
      derived.f ^= UNOWNED;
    }
  }
  if (is_derived) {
    derived = /** @type {Derived} */
    signal;
    if (check_dirtiness(derived)) {
      update_derived(derived);
    }
  }
  if (is_destroying_effect && old_values.has(signal)) {
    return old_values.get(signal);
  }
  return signal.v;
}
function untrack(fn) {
  var previous_untracking = untracking;
  try {
    untracking = true;
    return fn();
  } finally {
    untracking = previous_untracking;
  }
}
function set_signal_status(signal, status) {
  signal.f = signal.f & STATUS_MASK | status;
}
function escape_html(value, is_attr) {
  const str = String(value ?? "");
  const pattern2 = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern2.lastIndex = 0;
  let escaped2 = "";
  let last = 0;
  while (pattern2.test(str)) {
    const i = pattern2.lastIndex - 1;
    const ch = str[i];
    escaped2 += str.substring(last, i) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i + 1;
  }
  return escaped2 + str.substring(last);
}
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean) return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function to_class(value, hash2, directives) {
  var classname = value == null ? "" : "" + value;
  if (directives) {
    for (var key2 in directives) {
      if (directives[key2]) {
        classname = classname ? classname + " " + key2 : key2;
      } else if (classname.length) {
        var len = key2.length;
        var a = 0;
        while ((a = classname.indexOf(key2, a)) >= 0) {
          var b = a + len;
          if ((a === 0 || whitespace.includes(classname[a - 1])) && (b === classname.length || whitespace.includes(classname[b]))) {
            classname = (a === 0 ? "" : classname.substring(0, a)) + classname.substring(b + 1);
          } else {
            a = b;
          }
        }
      }
    }
  }
  return classname === "" ? null : classname;
}
function to_style(value, styles) {
  return value == null ? null : String(value);
}
function subscribe_to_store(store, run, invalidate) {
  if (store == null) {
    run(void 0);
    return noop;
  }
  const unsub = untrack(
    () => store.subscribe(
      run,
      // @ts-expect-error
      invalidate
    )
  );
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function getContext(key2) {
  const context_map = get_or_init_context_map();
  const result = (
    /** @type {T} */
    context_map.get(key2)
  );
  return result;
}
function setContext(key2, context2) {
  get_or_init_context_map().set(key2, context2);
  return context2;
}
function get_or_init_context_map(name) {
  if (current_component === null) {
    lifecycle_outside_component();
  }
  return current_component.c ??= new Map(get_parent_context(current_component) || void 0);
}
function push(fn) {
  current_component = { p: current_component, c: null, d: null };
}
function pop() {
  var component31 = (
    /** @type {Component} */
    current_component
  );
  var ondestroy = component31.d;
  if (ondestroy) {
    on_destroy.push(...ondestroy);
  }
  current_component = component31.p;
}
function get_parent_context(component_context2) {
  let parent = component_context2.p;
  while (parent !== null) {
    const context_map = parent.c;
    if (context_map !== null) {
      return context_map;
    }
    parent = parent.p;
  }
  return null;
}
function props_id_generator(prefix) {
  let uid = 1;
  return () => `${prefix}s${uid++}`;
}
function render(component31, options2 = {}) {
  const payload = new Payload(options2.idPrefix ? options2.idPrefix + "-" : "");
  const prev_on_destroy = on_destroy;
  on_destroy = [];
  payload.out += BLOCK_OPEN;
  if (options2.context) {
    push();
    current_component.c = options2.context;
  }
  component31(payload, options2.props ?? {}, {}, {});
  if (options2.context) {
    pop();
  }
  payload.out += BLOCK_CLOSE;
  for (const cleanup of on_destroy) cleanup();
  on_destroy = prev_on_destroy;
  let head = payload.head.out + payload.head.title;
  for (const { hash: hash2, code } of payload.css) {
    head += `<style id="${hash2}">${code}</style>`;
  }
  return {
    head,
    html: payload.out,
    body: payload.out
  };
}
function stringify(value) {
  return typeof value === "string" ? value : value == null ? "" : value + "";
}
function attr_class(value, hash2, directives) {
  var result = to_class(value, hash2, directives);
  return result ? ` class="${escape_html(result, true)}"` : "";
}
function attr_style(value, directives) {
  var result = to_style(value);
  return result ? ` style="${escape_html(result, true)}"` : "";
}
function store_get(store_values, store_name, store) {
  if (store_name in store_values && store_values[store_name][0] === store) {
    return store_values[store_name][2];
  }
  store_values[store_name]?.[1]();
  store_values[store_name] = [store, null, void 0];
  const unsub = subscribe_to_store(
    store,
    /** @param {any} v */
    (v) => store_values[store_name][2] = v
  );
  store_values[store_name][1] = unsub;
  return store_values[store_name][2];
}
function unsubscribe_stores(store_values) {
  for (const store_name in store_values) {
    store_values[store_name][1]();
  }
}
function slot(payload, $$props, name, slot_props, fallback_fn) {
  var slot_fn = $$props.$$slots?.[name];
  if (slot_fn === true) {
    slot_fn = $$props["children"];
  }
  if (slot_fn !== void 0) {
    slot_fn(payload, slot_props);
  }
}
function bind_props(props_parent, props_now) {
  for (const key2 in props_now) {
    const initial_value = props_parent[key2];
    const value = props_now[key2];
    if (initial_value === void 0 && value !== void 0 && Object.getOwnPropertyDescriptor(props_parent, key2)?.set) {
      props_parent[key2] = value;
    }
  }
}
function ensure_array_like(array_like_or_iterator) {
  if (array_like_or_iterator) {
    return array_like_or_iterator.length !== void 0 ? array_like_or_iterator : Array.from(array_like_or_iterator);
  }
  return [];
}
function maybe_selected(payload, value) {
  return value === payload.select_value ? " selected" : "";
}
var DEV, DERIVED, EFFECT, RENDER_EFFECT, BLOCK_EFFECT, BRANCH_EFFECT, ROOT_EFFECT, BOUNDARY_EFFECT, UNOWNED, DISCONNECTED, CLEAN, DIRTY, MAYBE_DIRTY, INERT, DESTROYED, EFFECT_RAN, EFFECT_TRANSPARENT, HEAD_EFFECT, EFFECT_HAS_DERIVED, EFFECT_IS_UPDATING, STATE_SYMBOL, LEGACY_PROPS, tracing_mode_flag, HYDRATION_START, HYDRATION_END, HYDRATION_ERROR, UNINITIALIZED, component_context, old_values, $window, first_child_getter, next_sibling_getter, micro_tasks, idle_tasks, is_flushing, last_scheduled_effect, is_updating_effect, is_destroying_effect, queued_root_effects, active_reaction, untracking, active_effect, reaction_sources, new_deps, skipped_deps, untracked_writes, write_version, read_version, skip_reaction, STATUS_MASK, ATTR_REGEX, CONTENT_REGEX, replacements, whitespace, current_component, BLOCK_OPEN, BLOCK_CLOSE, HeadPayload, Payload, on_destroy;
var init_chunks = __esm({
  ".svelte-kit/output/server/chunks/index.js"() {
    init_clsx();
    init_equality();
    DEV = false;
    DERIVED = 1 << 1;
    EFFECT = 1 << 2;
    RENDER_EFFECT = 1 << 3;
    BLOCK_EFFECT = 1 << 4;
    BRANCH_EFFECT = 1 << 5;
    ROOT_EFFECT = 1 << 6;
    BOUNDARY_EFFECT = 1 << 7;
    UNOWNED = 1 << 8;
    DISCONNECTED = 1 << 9;
    CLEAN = 1 << 10;
    DIRTY = 1 << 11;
    MAYBE_DIRTY = 1 << 12;
    INERT = 1 << 13;
    DESTROYED = 1 << 14;
    EFFECT_RAN = 1 << 15;
    EFFECT_TRANSPARENT = 1 << 16;
    HEAD_EFFECT = 1 << 19;
    EFFECT_HAS_DERIVED = 1 << 20;
    EFFECT_IS_UPDATING = 1 << 21;
    STATE_SYMBOL = Symbol("$state");
    LEGACY_PROPS = Symbol("legacy props");
    __name(effect_update_depth_exceeded, "effect_update_depth_exceeded");
    __name(hydration_failed, "hydration_failed");
    __name(state_descriptors_fixed, "state_descriptors_fixed");
    __name(state_prototype_fixed, "state_prototype_fixed");
    __name(state_unsafe_mutation, "state_unsafe_mutation");
    tracing_mode_flag = false;
    HYDRATION_START = "[";
    HYDRATION_END = "]";
    HYDRATION_ERROR = {};
    UNINITIALIZED = Symbol();
    __name(lifecycle_outside_component, "lifecycle_outside_component");
    component_context = null;
    __name(set_component_context, "set_component_context");
    __name(push$1, "push$1");
    __name(pop$1, "pop$1");
    __name(is_runes, "is_runes");
    __name(proxy, "proxy");
    __name(update_version, "update_version");
    __name(destroy_derived_effects, "destroy_derived_effects");
    __name(get_derived_parent_effect, "get_derived_parent_effect");
    __name(execute_derived, "execute_derived");
    __name(update_derived, "update_derived");
    old_values = /* @__PURE__ */ new Map();
    __name(source, "source");
    __name(state, "state");
    __name(mutable_source, "mutable_source");
    __name(set, "set");
    __name(internal_set, "internal_set");
    __name(mark_reactions, "mark_reactions");
    __name(init_operations, "init_operations");
    __name(create_text, "create_text");
    __name(get_first_child, "get_first_child");
    __name(get_next_sibling, "get_next_sibling");
    __name(clear_text_content, "clear_text_content");
    __name(push_effect, "push_effect");
    __name(create_effect, "create_effect");
    __name(teardown, "teardown");
    __name(component_root, "component_root");
    __name(effect, "effect");
    __name(branch, "branch");
    __name(execute_effect_teardown, "execute_effect_teardown");
    __name(destroy_effect_children, "destroy_effect_children");
    __name(destroy_block_effect_children, "destroy_block_effect_children");
    __name(destroy_effect, "destroy_effect");
    __name(remove_effect_dom, "remove_effect_dom");
    __name(unlink_effect, "unlink_effect");
    __name(pause_effect, "pause_effect");
    __name(run_out_transitions, "run_out_transitions");
    __name(pause_children, "pause_children");
    micro_tasks = [];
    idle_tasks = [];
    __name(run_micro_tasks, "run_micro_tasks");
    __name(run_idle_tasks, "run_idle_tasks");
    __name(flush_tasks, "flush_tasks");
    __name(handle_error, "handle_error");
    __name(invoke_error_boundary, "invoke_error_boundary");
    is_flushing = false;
    last_scheduled_effect = null;
    is_updating_effect = false;
    is_destroying_effect = false;
    __name(set_is_destroying_effect, "set_is_destroying_effect");
    queued_root_effects = [];
    active_reaction = null;
    untracking = false;
    __name(set_active_reaction, "set_active_reaction");
    active_effect = null;
    __name(set_active_effect, "set_active_effect");
    reaction_sources = null;
    __name(push_reaction_value, "push_reaction_value");
    new_deps = null;
    skipped_deps = 0;
    untracked_writes = null;
    __name(set_untracked_writes, "set_untracked_writes");
    write_version = 1;
    read_version = 0;
    skip_reaction = false;
    __name(increment_write_version, "increment_write_version");
    __name(check_dirtiness, "check_dirtiness");
    __name(schedule_possible_effect_self_invalidation, "schedule_possible_effect_self_invalidation");
    __name(update_reaction, "update_reaction");
    __name(remove_reaction, "remove_reaction");
    __name(remove_reactions, "remove_reactions");
    __name(update_effect, "update_effect");
    __name(infinite_loop_guard, "infinite_loop_guard");
    __name(flush_queued_root_effects, "flush_queued_root_effects");
    __name(flush_queued_effects, "flush_queued_effects");
    __name(schedule_effect, "schedule_effect");
    __name(process_effects, "process_effects");
    __name(flushSync, "flushSync");
    __name(get, "get");
    __name(untrack, "untrack");
    STATUS_MASK = -7169;
    __name(set_signal_status, "set_signal_status");
    ATTR_REGEX = /[&"<]/g;
    CONTENT_REGEX = /[&<]/g;
    __name(escape_html, "escape_html");
    replacements = {
      translate: /* @__PURE__ */ new Map([
        [true, "yes"],
        [false, "no"]
      ])
    };
    __name(attr, "attr");
    whitespace = [..." 	\n\r\f\xA0\v\uFEFF"];
    __name(to_class, "to_class");
    __name(to_style, "to_style");
    __name(subscribe_to_store, "subscribe_to_store");
    current_component = null;
    __name(getContext, "getContext");
    __name(setContext, "setContext");
    __name(get_or_init_context_map, "get_or_init_context_map");
    __name(push, "push");
    __name(pop, "pop");
    __name(get_parent_context, "get_parent_context");
    BLOCK_OPEN = `<!--${HYDRATION_START}-->`;
    BLOCK_CLOSE = `<!--${HYDRATION_END}-->`;
    HeadPayload = class {
      static {
        __name(this, "HeadPayload");
      }
      /** @type {Set<{ hash: string; code: string }>} */
      css = /* @__PURE__ */ new Set();
      out = "";
      uid = /* @__PURE__ */ __name(() => "", "uid");
      title = "";
      constructor(css = /* @__PURE__ */ new Set(), out = "", title = "", uid = () => "") {
        this.css = css;
        this.out = out;
        this.title = title;
        this.uid = uid;
      }
    };
    Payload = class {
      static {
        __name(this, "Payload");
      }
      /** @type {Set<{ hash: string; code: string }>} */
      css = /* @__PURE__ */ new Set();
      out = "";
      uid = /* @__PURE__ */ __name(() => "", "uid");
      select_value = void 0;
      head = new HeadPayload();
      constructor(id_prefix = "") {
        this.uid = props_id_generator(id_prefix);
        this.head.uid = this.uid;
      }
    };
    __name(props_id_generator, "props_id_generator");
    on_destroy = [];
    __name(render, "render");
    __name(stringify, "stringify");
    __name(attr_class, "attr_class");
    __name(attr_style, "attr_style");
    __name(store_get, "store_get");
    __name(unsubscribe_stores, "unsubscribe_stores");
    __name(slot, "slot");
    __name(bind_props, "bind_props");
    __name(ensure_array_like, "ensure_array_like");
    __name(maybe_selected, "maybe_selected");
  }
});

// .svelte-kit/output/server/chunks/hooks.server.js
var hooks_server_exports = {};
__export(hooks_server_exports, {
  handle: () => handle
});
var handle;
var init_hooks_server = __esm({
  ".svelte-kit/output/server/chunks/hooks.server.js"() {
    handle = /* @__PURE__ */ __name(async ({ event, resolve: resolve2 }) => {
      event.locals.DB = event.platform?.env?.DB;
      return resolve2(event);
    }, "handle");
  }
});

// .svelte-kit/output/server/chunks/index2.js
function error(status, body2) {
  if (isNaN(status) || status < 400 || status > 599) {
    throw new Error(`HTTP error status codes must be between 400 and 599 \u2014 ${status} is invalid`);
  }
  throw new HttpError(status, body2);
}
function redirect(status, location) {
  if (isNaN(status) || status < 300 || status > 308) {
    throw new Error("Invalid status code");
  }
  throw new Redirect(
    // @ts-ignore
    status,
    location.toString()
  );
}
function json(data, init2) {
  const body2 = JSON.stringify(data);
  const headers2 = new Headers(init2?.headers);
  if (!headers2.has("content-length")) {
    headers2.set("content-length", encoder.encode(body2).byteLength.toString());
  }
  if (!headers2.has("content-type")) {
    headers2.set("content-type", "application/json");
  }
  return new Response(body2, {
    ...init2,
    headers: headers2
  });
}
function text(body2, init2) {
  const headers2 = new Headers(init2?.headers);
  if (!headers2.has("content-length")) {
    const encoded = encoder.encode(body2);
    headers2.set("content-length", encoded.byteLength.toString());
    return new Response(encoded, {
      ...init2,
      headers: headers2
    });
  }
  return new Response(body2, {
    ...init2,
    headers: headers2
  });
}
function fail(status, data) {
  return new ActionFailure(status, data);
}
var HttpError, Redirect, SvelteKitError, ActionFailure, encoder;
var init_index2 = __esm({
  ".svelte-kit/output/server/chunks/index2.js"() {
    HttpError = class {
      static {
        __name(this, "HttpError");
      }
      /**
       * @param {number} status
       * @param {{message: string} extends App.Error ? (App.Error | string | undefined) : App.Error} body
       */
      constructor(status, body2) {
        this.status = status;
        if (typeof body2 === "string") {
          this.body = { message: body2 };
        } else if (body2) {
          this.body = body2;
        } else {
          this.body = { message: `Error: ${status}` };
        }
      }
      toString() {
        return JSON.stringify(this.body);
      }
    };
    Redirect = class {
      static {
        __name(this, "Redirect");
      }
      /**
       * @param {300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308} status
       * @param {string} location
       */
      constructor(status, location) {
        this.status = status;
        this.location = location;
      }
    };
    SvelteKitError = class extends Error {
      static {
        __name(this, "SvelteKitError");
      }
      /**
       * @param {number} status
       * @param {string} text
       * @param {string} message
       */
      constructor(status, text2, message) {
        super(message);
        this.status = status;
        this.text = text2;
      }
    };
    ActionFailure = class {
      static {
        __name(this, "ActionFailure");
      }
      /**
       * @param {number} status
       * @param {T} data
       */
      constructor(status, data) {
        this.status = status;
        this.data = data;
      }
    };
    __name(error, "error");
    __name(redirect, "redirect");
    __name(json, "json");
    encoder = new TextEncoder();
    __name(text, "text");
    __name(fail, "fail");
  }
});

// .svelte-kit/output/server/chunks/exports.js
function resolve(base2, path) {
  if (path[0] === "/" && path[1] === "/") return path;
  let url = new URL(base2, internal);
  url = new URL(path, url);
  return url.protocol === internal.protocol ? url.pathname + url.search + url.hash : url.href;
}
function normalize_path(path, trailing_slash) {
  if (path === "/" || trailing_slash === "ignore") return path;
  if (trailing_slash === "never") {
    return path.endsWith("/") ? path.slice(0, -1) : path;
  } else if (trailing_slash === "always" && !path.endsWith("/")) {
    return path + "/";
  }
  return path;
}
function decode_pathname(pathname) {
  return pathname.split("%25").map(decodeURI).join("%25");
}
function decode_params(params) {
  for (const key2 in params) {
    params[key2] = decodeURIComponent(params[key2]);
  }
  return params;
}
function make_trackable(url, callback, search_params_callback, allow_hash = false) {
  const tracked = new URL(url);
  Object.defineProperty(tracked, "searchParams", {
    value: new Proxy(tracked.searchParams, {
      get(obj, key2) {
        if (key2 === "get" || key2 === "getAll" || key2 === "has") {
          return (param) => {
            search_params_callback(param);
            return obj[key2](param);
          };
        }
        callback();
        const value = Reflect.get(obj, key2);
        return typeof value === "function" ? value.bind(obj) : value;
      }
    }),
    enumerable: true,
    configurable: true
  });
  const tracked_url_properties = ["href", "pathname", "search", "toString", "toJSON"];
  if (allow_hash) tracked_url_properties.push("hash");
  for (const property of tracked_url_properties) {
    Object.defineProperty(tracked, property, {
      get() {
        callback();
        return url[property];
      },
      enumerable: true,
      configurable: true
    });
  }
  {
    tracked[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(url, opts);
    };
    tracked.searchParams[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(url.searchParams, opts);
    };
  }
  if (!allow_hash) {
    disable_hash(tracked);
  }
  return tracked;
}
function disable_hash(url) {
  allow_nodejs_console_log(url);
  Object.defineProperty(url, "hash", {
    get() {
      throw new Error(
        "Cannot access event.url.hash. Consider using `page.url.hash` inside a component instead"
      );
    }
  });
}
function disable_search(url) {
  allow_nodejs_console_log(url);
  for (const property of ["search", "searchParams"]) {
    Object.defineProperty(url, property, {
      get() {
        throw new Error(`Cannot access url.${property} on a page with prerendering enabled`);
      }
    });
  }
}
function allow_nodejs_console_log(url) {
  {
    url[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(new URL(url), opts);
    };
  }
}
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop = null;
  const subscribers = /* @__PURE__ */ new Set();
  function set2(new_value) {
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
  __name(set2, "set");
  function update(fn) {
    set2(fn(
      /** @type {T} */
      value
    ));
  }
  __name(update, "update");
  function subscribe(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set2, update) || noop;
    }
    run(
      /** @type {T} */
      value
    );
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0 && stop) {
        stop();
        stop = null;
      }
    };
  }
  __name(subscribe, "subscribe");
  return { set: set2, update, subscribe };
}
function validator(expected) {
  function validate(module, file) {
    if (!module) return;
    for (const key2 in module) {
      if (key2[0] === "_" || expected.has(key2)) continue;
      const values = [...expected.values()];
      const hint = hint_for_supported_files(key2, file?.slice(file.lastIndexOf("."))) ?? `valid exports are ${values.join(", ")}, or anything with a '_' prefix`;
      throw new Error(`Invalid export '${key2}'${file ? ` in ${file}` : ""} (${hint})`);
    }
  }
  __name(validate, "validate");
  return validate;
}
function hint_for_supported_files(key2, ext = ".js") {
  const supported_files = [];
  if (valid_layout_exports.has(key2)) {
    supported_files.push(`+layout${ext}`);
  }
  if (valid_page_exports.has(key2)) {
    supported_files.push(`+page${ext}`);
  }
  if (valid_layout_server_exports.has(key2)) {
    supported_files.push(`+layout.server${ext}`);
  }
  if (valid_page_server_exports.has(key2)) {
    supported_files.push(`+page.server${ext}`);
  }
  if (valid_server_exports.has(key2)) {
    supported_files.push(`+server${ext}`);
  }
  if (supported_files.length > 0) {
    return `'${key2}' is a valid export in ${supported_files.slice(0, -1).join(", ")}${supported_files.length > 1 ? " or " : ""}${supported_files.at(-1)}`;
  }
}
var internal, subscriber_queue, valid_layout_exports, valid_page_exports, valid_layout_server_exports, valid_page_server_exports, valid_server_exports, validate_layout_exports, validate_page_exports, validate_layout_server_exports, validate_page_server_exports, validate_server_exports;
var init_exports = __esm({
  ".svelte-kit/output/server/chunks/exports.js"() {
    init_equality();
    init_clsx();
    internal = new URL("sveltekit-internal://");
    __name(resolve, "resolve");
    __name(normalize_path, "normalize_path");
    __name(decode_pathname, "decode_pathname");
    __name(decode_params, "decode_params");
    __name(make_trackable, "make_trackable");
    __name(disable_hash, "disable_hash");
    __name(disable_search, "disable_search");
    __name(allow_nodejs_console_log, "allow_nodejs_console_log");
    subscriber_queue = [];
    __name(readable, "readable");
    __name(writable, "writable");
    __name(validator, "validator");
    __name(hint_for_supported_files, "hint_for_supported_files");
    valid_layout_exports = /* @__PURE__ */ new Set([
      "load",
      "prerender",
      "csr",
      "ssr",
      "trailingSlash",
      "config"
    ]);
    valid_page_exports = /* @__PURE__ */ new Set([...valid_layout_exports, "entries"]);
    valid_layout_server_exports = /* @__PURE__ */ new Set([...valid_layout_exports]);
    valid_page_server_exports = /* @__PURE__ */ new Set([...valid_layout_server_exports, "actions", "entries"]);
    valid_server_exports = /* @__PURE__ */ new Set([
      "GET",
      "POST",
      "PATCH",
      "PUT",
      "DELETE",
      "OPTIONS",
      "HEAD",
      "fallback",
      "prerender",
      "trailingSlash",
      "config",
      "entries"
    ]);
    validate_layout_exports = validator(valid_layout_exports);
    validate_page_exports = validator(valid_page_exports);
    validate_layout_server_exports = validator(valid_layout_server_exports);
    validate_page_server_exports = validator(valid_page_server_exports);
    validate_server_exports = validator(valid_server_exports);
  }
});

// node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/cookie/index.js"(exports) {
    "use strict";
    exports.parse = parse2;
    exports.serialize = serialize2;
    var __toString = Object.prototype.toString;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse2(str, options2) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options2 || {};
      var dec = opt.decode || decode;
      var index31 = 0;
      while (index31 < str.length) {
        var eqIdx = str.indexOf("=", index31);
        if (eqIdx === -1) {
          break;
        }
        var endIdx = str.indexOf(";", index31);
        if (endIdx === -1) {
          endIdx = str.length;
        } else if (endIdx < eqIdx) {
          index31 = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        var key2 = str.slice(index31, eqIdx).trim();
        if (void 0 === obj[key2]) {
          var val = str.slice(eqIdx + 1, endIdx).trim();
          if (val.charCodeAt(0) === 34) {
            val = val.slice(1, -1);
          }
          obj[key2] = tryDecode(val, dec);
        }
        index31 = endIdx + 1;
      }
      return obj;
    }
    __name(parse2, "parse");
    function serialize2(name, val, options2) {
      var opt = options2 || {};
      var enc = opt.encode || encode2;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (null != opt.maxAge) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        var expires = opt.expires;
        if (!isDate(expires) || isNaN(expires.valueOf())) {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.partitioned) {
        str += "; Partitioned";
      }
      if (opt.priority) {
        var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError("option priority is invalid");
        }
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    __name(serialize2, "serialize");
    function decode(str) {
      return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
    }
    __name(decode, "decode");
    function encode2(val) {
      return encodeURIComponent(val);
    }
    __name(encode2, "encode");
    function isDate(val) {
      return __toString.call(val) === "[object Date]" || val instanceof Date;
    }
    __name(isDate, "isDate");
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e3) {
        return str;
      }
    }
    __name(tryDecode, "tryDecode");
  }
});

// node_modules/set-cookie-parser/lib/set-cookie.js
var require_set_cookie = __commonJS({
  "node_modules/set-cookie-parser/lib/set-cookie.js"(exports, module) {
    "use strict";
    var defaultParseOptions = {
      decodeValues: true,
      map: false,
      silent: false
    };
    function isNonEmptyString(str) {
      return typeof str === "string" && !!str.trim();
    }
    __name(isNonEmptyString, "isNonEmptyString");
    function parseString2(setCookieValue, options2) {
      var parts = setCookieValue.split(";").filter(isNonEmptyString);
      var nameValuePairStr = parts.shift();
      var parsed = parseNameValuePair(nameValuePairStr);
      var name = parsed.name;
      var value = parsed.value;
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      try {
        value = options2.decodeValues ? decodeURIComponent(value) : value;
      } catch (e3) {
        console.error(
          "set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.",
          e3
        );
      }
      var cookie = {
        name,
        value
      };
      parts.forEach(function(part) {
        var sides = part.split("=");
        var key2 = sides.shift().trimLeft().toLowerCase();
        var value2 = sides.join("=");
        if (key2 === "expires") {
          cookie.expires = new Date(value2);
        } else if (key2 === "max-age") {
          cookie.maxAge = parseInt(value2, 10);
        } else if (key2 === "secure") {
          cookie.secure = true;
        } else if (key2 === "httponly") {
          cookie.httpOnly = true;
        } else if (key2 === "samesite") {
          cookie.sameSite = value2;
        } else if (key2 === "partitioned") {
          cookie.partitioned = true;
        } else {
          cookie[key2] = value2;
        }
      });
      return cookie;
    }
    __name(parseString2, "parseString");
    function parseNameValuePair(nameValuePairStr) {
      var name = "";
      var value = "";
      var nameValueArr = nameValuePairStr.split("=");
      if (nameValueArr.length > 1) {
        name = nameValueArr.shift();
        value = nameValueArr.join("=");
      } else {
        value = nameValuePairStr;
      }
      return { name, value };
    }
    __name(parseNameValuePair, "parseNameValuePair");
    function parse2(input, options2) {
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      if (!input) {
        if (!options2.map) {
          return [];
        } else {
          return {};
        }
      }
      if (input.headers) {
        if (typeof input.headers.getSetCookie === "function") {
          input = input.headers.getSetCookie();
        } else if (input.headers["set-cookie"]) {
          input = input.headers["set-cookie"];
        } else {
          var sch = input.headers[Object.keys(input.headers).find(function(key2) {
            return key2.toLowerCase() === "set-cookie";
          })];
          if (!sch && input.headers.cookie && !options2.silent) {
            console.warn(
              "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
            );
          }
          input = sch;
        }
      }
      if (!Array.isArray(input)) {
        input = [input];
      }
      if (!options2.map) {
        return input.filter(isNonEmptyString).map(function(str) {
          return parseString2(str, options2);
        });
      } else {
        var cookies = {};
        return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
          var cookie = parseString2(str, options2);
          cookies2[cookie.name] = cookie;
          return cookies2;
        }, cookies);
      }
    }
    __name(parse2, "parse");
    function splitCookiesString2(cookiesString) {
      if (Array.isArray(cookiesString)) {
        return cookiesString;
      }
      if (typeof cookiesString !== "string") {
        return [];
      }
      var cookiesStrings = [];
      var pos = 0;
      var start;
      var ch;
      var lastComma;
      var nextStart;
      var cookiesSeparatorFound;
      function skipWhitespace() {
        while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
          pos += 1;
        }
        return pos < cookiesString.length;
      }
      __name(skipWhitespace, "skipWhitespace");
      function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
      }
      __name(notSpecialChar, "notSpecialChar");
      while (pos < cookiesString.length) {
        start = pos;
        cookiesSeparatorFound = false;
        while (skipWhitespace()) {
          ch = cookiesString.charAt(pos);
          if (ch === ",") {
            lastComma = pos;
            pos += 1;
            skipWhitespace();
            nextStart = pos;
            while (pos < cookiesString.length && notSpecialChar()) {
              pos += 1;
            }
            if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
              cookiesSeparatorFound = true;
              pos = nextStart;
              cookiesStrings.push(cookiesString.substring(start, lastComma));
              start = pos;
            } else {
              pos = lastComma + 1;
            }
          } else {
            pos += 1;
          }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
          cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
      }
      return cookiesStrings;
    }
    __name(splitCookiesString2, "splitCookiesString");
    module.exports = parse2;
    module.exports.parse = parse2;
    module.exports.parseString = parseString2;
    module.exports.splitCookiesString = splitCookiesString2;
  }
});

// .svelte-kit/output/server/chunks/client.js
function get2(key2, parse2 = JSON.parse) {
  try {
    return parse2(sessionStorage[key2]);
  } catch {
  }
}
function create_updated_store() {
  const { set: set2, subscribe } = writable(false);
  {
    return {
      subscribe,
      // eslint-disable-next-line @typescript-eslint/require-await
      check: /* @__PURE__ */ __name(async () => false, "check")
    };
  }
}
var SNAPSHOT_KEY, SCROLL_KEY, is_legacy, stores;
var init_client = __esm({
  ".svelte-kit/output/server/chunks/client.js"() {
    init_clsx();
    init_exports();
    init_equality();
    __name(get2, "get");
    SNAPSHOT_KEY = "sveltekit:snapshot";
    SCROLL_KEY = "sveltekit:scroll";
    __name(create_updated_store, "create_updated_store");
    is_legacy = noop.toString().includes("$$") || /function \w+\(\) \{\}/.test(noop.toString());
    if (is_legacy) {
      ({
        data: {},
        form: null,
        error: null,
        params: {},
        route: { id: null },
        state: {},
        status: -1,
        url: new URL("https://example.com")
      });
    }
    get2(SCROLL_KEY) ?? {};
    get2(SNAPSHOT_KEY) ?? {};
    stores = {
      updated: /* @__PURE__ */ create_updated_store()
    };
  }
});

// .svelte-kit/output/server/entries/pages/_layout.svelte.js
var layout_svelte_exports = {};
__export(layout_svelte_exports, {
  default: () => _layout
});
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  const navigation = [
    { name: "Dashboard", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Tasks", href: "/tasks" },
    { name: "Notes", href: "/notes" },
    { name: "Ideas", href: "/ideas" },
    { name: "Goals", href: "/goals" },
    { name: "Docs", href: "/docs" },
    { name: "Resources", href: "/resources" }
  ];
  const each_array = ensure_array_like(navigation);
  $$payload.out += `<div class="min-h-screen bg-gray-50"><nav class="bg-white shadow-sm border-b"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex justify-between h-16"><div class="flex"><div class="flex-shrink-0 flex items-center"><h1 class="text-xl font-bold text-gray-900">Planner App</h1></div> <div class="ml-6 flex space-x-8"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$payload.out += `<a${attr("href", item.href)}${attr_class(`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ${stringify(store_get($$store_subs ??= {}, "$page", page).url.pathname === item.href || store_get($$store_subs ??= {}, "$page", page).url.pathname.startsWith(item.href) && item.href !== "/" ? "border-indigo-500 text-gray-900" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700")}`)}>${escape_html(item.name)}</a>`;
  }
  $$payload.out += `<!--]--></div></div></div></div></nav> <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></main></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
var getStores, page;
var init_layout_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_layout.svelte.js"() {
    init_chunks();
    init_client();
    getStores = /* @__PURE__ */ __name(() => {
      const stores$1 = getContext("__svelte__");
      return {
        /** @type {typeof page} */
        page: {
          subscribe: stores$1.page.subscribe
        },
        /** @type {typeof navigating} */
        navigating: {
          subscribe: stores$1.navigating.subscribe
        },
        /** @type {typeof updated} */
        updated: stores$1.updated
      };
    }, "getStores");
    page = {
      subscribe(fn) {
        const store = getStores().page;
        return store.subscribe(fn);
      }
    };
    __name(_layout, "_layout");
  }
});

// .svelte-kit/output/server/nodes/0.js
var __exports = {};
__export(__exports, {
  component: () => component,
  fonts: () => fonts,
  imports: () => imports,
  index: () => index,
  stylesheets: () => stylesheets
});
var index, component_cache, component, imports, stylesheets, fonts;
var init__ = __esm({
  ".svelte-kit/output/server/nodes/0.js"() {
    index = 0;
    component = /* @__PURE__ */ __name(async () => component_cache ??= (await Promise.resolve().then(() => (init_layout_svelte(), layout_svelte_exports))).default, "component");
    imports = ["_app/immutable/nodes/0.CqwtMZp4.js", "_app/immutable/chunks/CWj6FrbW.js", "_app/immutable/chunks/69_IOA4Y.js", "_app/immutable/chunks/DIeogL5L.js", "_app/immutable/chunks/D_AdGWyy.js", "_app/immutable/chunks/CxhRu3wT.js", "_app/immutable/chunks/BMlzsybF.js", "_app/immutable/chunks/C2Bgqaw1.js", "_app/immutable/chunks/Dj3WCWGW.js", "_app/immutable/chunks/BNVceiNn.js", "_app/immutable/chunks/DkPbIObf.js", "_app/immutable/chunks/COTeNld2.js", "_app/immutable/chunks/CamM0Y98.js", "_app/immutable/chunks/C7WNTl10.js", "_app/immutable/chunks/ClAlbAGz.js", "_app/immutable/chunks/6lfPsB8W.js"];
    stylesheets = ["_app/immutable/assets/0.DPmCbO4K.css"];
    fonts = [];
  }
});

// .svelte-kit/output/server/entries/fallbacks/error.svelte.js
var error_svelte_exports = {};
__export(error_svelte_exports, {
  default: () => Error$1
});
function context() {
  return getContext("__request__");
}
function Error$1($$payload, $$props) {
  push();
  $$payload.out += `<h1>${escape_html(page2.status)}</h1> <p>${escape_html(page2.error?.message)}</p>`;
  pop();
}
var page$1, page2;
var init_error_svelte = __esm({
  ".svelte-kit/output/server/entries/fallbacks/error.svelte.js"() {
    init_chunks();
    init_clsx();
    init_client();
    ({
      check: stores.updated.check
    });
    __name(context, "context");
    page$1 = {
      get error() {
        return context().page.error;
      },
      get status() {
        return context().page.status;
      }
    };
    page2 = page$1;
    __name(Error$1, "Error$1");
  }
});

// .svelte-kit/output/server/nodes/1.js
var __exports2 = {};
__export(__exports2, {
  component: () => component2,
  fonts: () => fonts2,
  imports: () => imports2,
  index: () => index2,
  stylesheets: () => stylesheets2
});
var index2, component_cache2, component2, imports2, stylesheets2, fonts2;
var init__2 = __esm({
  ".svelte-kit/output/server/nodes/1.js"() {
    index2 = 1;
    component2 = /* @__PURE__ */ __name(async () => component_cache2 ??= (await Promise.resolve().then(() => (init_error_svelte(), error_svelte_exports))).default, "component");
    imports2 = ["_app/immutable/nodes/1.Dh_wmyx_.js", "_app/immutable/chunks/CWj6FrbW.js", "_app/immutable/chunks/69_IOA4Y.js", "_app/immutable/chunks/DIeogL5L.js", "_app/immutable/chunks/D_AdGWyy.js", "_app/immutable/chunks/CxhRu3wT.js", "_app/immutable/chunks/BMlzsybF.js", "_app/immutable/chunks/COTeNld2.js", "_app/immutable/chunks/ClAlbAGz.js", "_app/immutable/chunks/C7WNTl10.js", "_app/immutable/chunks/6lfPsB8W.js"];
    stylesheets2 = [];
    fonts2 = [];
  }
});

// .svelte-kit/output/server/entries/pages/_page.svelte.js
var page_svelte_exports = {};
__export(page_svelte_exports, {
  default: () => _page
});
function _page($$payload) {
  $$payload.out += `<div class="space-y-6"><div class="bg-white rounded-lg shadow p-6"><h1 class="text-2xl font-bold text-gray-900 mb-4">Dashboard</h1> <p class="text-gray-600">Welcome to your planner app!</p></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div class="bg-white rounded-lg shadow p-6"><h2 class="text-lg font-semibold text-gray-900 mb-2">Projects</h2> <p class="text-3xl font-bold text-primary">0</p></div> <div class="bg-white rounded-lg shadow p-6"><h2 class="text-lg font-semibold text-gray-900 mb-2">Active Tasks</h2> <p class="text-3xl font-bold text-blue-600">0</p></div> <div class="bg-white rounded-lg shadow p-6"><h2 class="text-lg font-semibold text-gray-900 mb-2">Notes</h2> <p class="text-3xl font-bold text-purple-600">0</p></div></div></div>`;
}
var init_page_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_page.svelte.js"() {
    init_clsx();
    __name(_page, "_page");
  }
});

// .svelte-kit/output/server/nodes/2.js
var __exports3 = {};
__export(__exports3, {
  component: () => component3,
  fonts: () => fonts3,
  imports: () => imports3,
  index: () => index3,
  stylesheets: () => stylesheets3
});
var index3, component_cache3, component3, imports3, stylesheets3, fonts3;
var init__3 = __esm({
  ".svelte-kit/output/server/nodes/2.js"() {
    index3 = 2;
    component3 = /* @__PURE__ */ __name(async () => component_cache3 ??= (await Promise.resolve().then(() => (init_page_svelte(), page_svelte_exports))).default, "component");
    imports3 = ["_app/immutable/nodes/2.Du1F6Vz_.js", "_app/immutable/chunks/CWj6FrbW.js", "_app/immutable/chunks/69_IOA4Y.js", "_app/immutable/chunks/DIeogL5L.js", "_app/immutable/chunks/BMlzsybF.js", "_app/immutable/chunks/D_AdGWyy.js"];
    stylesheets3 = [];
    fonts3 = [];
  }
});

// .svelte-kit/output/server/entries/pages/docs/_page.server.js
var page_server_exports = {};
__export(page_server_exports, {
  actions: () => actions,
  load: () => load
});
async function load({ platform }) {
  const { results } = await platform.env.DB.prepare(
    `SELECT docs.*, projects.name as project_name 
     FROM docs 
     JOIN projects ON docs.project_id = projects.id 
     ORDER BY created_at DESC`
  ).all();
  return { docs: results };
}
var actions;
var init_page_server = __esm({
  ".svelte-kit/output/server/entries/pages/docs/_page.server.js"() {
    init_index2();
    __name(load, "load");
    actions = {
      delete: /* @__PURE__ */ __name(async ({ request, platform }) => {
        const id = (await request.formData()).get("id");
        try {
          await platform.env.DB.prepare("DELETE FROM docs WHERE id = ?").bind(id).run();
          return { success: true };
        } catch (error2) {
          return fail(500, { message: "Failed to delete doc" });
        }
      }, "delete")
    };
  }
});

// .svelte-kit/output/server/entries/pages/docs/_page.svelte.js
var page_svelte_exports2 = {};
__export(page_svelte_exports2, {
  default: () => _page2
});
function _page2($$payload, $$props) {
  push();
  let data = $$props["data"];
  const each_array = ensure_array_like(data.docs);
  $$payload.out += `<div class="container mx-auto p-4"><div class="flex justify-between items-center mb-4"><h1 class="text-2xl font-bold">Docs</h1> <a href="/docs/new" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">New Doc</a></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let doc = each_array[$$index];
    $$payload.out += `<div class="border p-4 rounded-lg shadow-sm flex flex-col justify-between"><div><h2 class="text-xl font-semibold">${escape_html(doc.title)}</h2> <p class="text-gray-500 text-sm mb-2">Project: ${escape_html(doc.project_name)}</p> <p class="text-gray-700 whitespace-pre-wrap truncate h-24">${escape_html(doc.content)}</p></div> <div class="flex justify-end space-x-2 mt-4"><a${attr("href", `/docs/${stringify(doc.id)}/edit`)} class="text-yellow-500 hover:underline">Edit</a> <form method="POST" action="?/delete"><input type="hidden" name="id"${attr("value", doc.id)}/> <button type="submit" class="text-red-500 hover:underline">Delete</button></form></div></div>`;
  }
  $$payload.out += `<!--]--></div></div>`;
  bind_props($$props, { data });
  pop();
}
var init_page_svelte2 = __esm({
  ".svelte-kit/output/server/entries/pages/docs/_page.svelte.js"() {
    init_chunks();
    init_client();
    __name(_page2, "_page");
  }
});

// .svelte-kit/output/server/nodes/3.js
var __exports4 = {};
__export(__exports4, {
  component: () => component4,
  fonts: () => fonts4,
  imports: () => imports4,
  index: () => index4,
  server: () => page_server_exports,
  server_id: () => server_id,
  stylesheets: () => stylesheets4
});
var index4, component_cache4, component4, server_id, imports4, stylesheets4, fonts4;
var init__4 = __esm({
  ".svelte-kit/output/server/nodes/3.js"() {
    init_page_server();
    index4 = 3;
    component4 = /* @__PURE__ */ __name(async () => component_cache4 ??= (await Promise.resolve().then(() => (init_page_svelte2(), page_svelte_exports2))).default, "component");
    server_id = "src/routes/docs/+page.server.js";
    imports4 = ["_app/immutable/nodes/3.Br3Bn2go.js", "_app/immutable/chunks/CWj6FrbW.js", "_app/immutable/chunks/69_IOA4Y.js", "_app/immutable/chunks/DIeogL5L.js", "_app/immutable/chunks/D_AdGWyy.js", "_app/immutable/chunks/CxhRu3wT.js", "_app/immutable/chunks/BMlzsybF.js", "_app/immutable/chunks/C2Bgqaw1.js", "_app/immutable/chunks/xeqJHUo9.js", "_app/immutable/chunks/ClAlbAGz.js", "_app/immutable/chunks/C7WNTl10.js", "_app/immutable/chunks/6lfPsB8W.js", "_app/immutable/chunks/Dj3WCWGW.js", "_app/immutable/chunks/COTeNld2.js", "_app/immutable/chunks/BKg0ivWU.js", "_app/immutable/chunks/CamM0Y98.js"];
    stylesheets4 = [];
    fonts4 = [];
  }
});

// .svelte-kit/output/server/entries/pages/docs/_id_/edit/_page.server.js
var page_server_exports2 = {};
__export(page_server_exports2, {
  actions: () => actions2,
  load: () => load2
});
async function load2({ params, platform }) {
  const doc = await platform.env.DB.prepare("SELECT * FROM docs WHERE id = ?").bind(params.id).first();
  if (!doc) throw error(404, "Doc not found");
  const { results: projects } = await platform.env.DB.prepare("SELECT id, name FROM projects").all();
  return { doc, projects };
}
var actions2;
var init_page_server2 = __esm({
  ".svelte-kit/output/server/entries/pages/docs/_id_/edit/_page.server.js"() {
    init_index2();
    __name(load2, "load");
    actions2 = {
      default: /* @__PURE__ */ __name(async ({ request, params, platform }) => {
        const formData = await request.formData();
        const data = Object.fromEntries(formData);
        try {
          await platform.env.DB.prepare(
            `UPDATE docs SET project_id = ?, title = ?, content = ?, type = ? WHERE id = ?`
          ).bind(data.project_id, data.title, data.content, data.type, params.id).run();
          throw redirect(303, `/docs`);
        } catch (err) {
          if (err.status === 303) throw err;
          return fail(500, { message: "Could not update doc." });
        }
      }, "default")
    };
  }
});

// .svelte-kit/output/server/entries/pages/docs/_id_/edit/_page.svelte.js
var page_svelte_exports3 = {};
__export(page_svelte_exports3, {
  default: () => _page3
});
function _page3($$payload, $$props) {
  let data = $$props["data"];
  let { doc, projects } = data;
  const each_array = ensure_array_like(projects);
  $$payload.out += `<div class="container mx-auto p-4 max-w-lg"><h1 class="text-2xl font-bold mb-4">Edit Doc</h1> <form method="POST" class="space-y-4"><div><label for="project_id" class="block text-sm font-medium">Project</label> <select name="project_id" required class="mt-1 block w-full px-3 py-2 border rounded-md"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let project = each_array[$$index];
    $$payload.out += `<option${attr("value", project.id)}${maybe_selected($$payload, project.id)}${attr("selected", project.id === doc.project_id, true)}>${escape_html(project.name)}</option>`;
  }
  $$payload.out += `<!--]--></select></div> <div><label for="title" class="block text-sm font-medium">Title</label> <input type="text" name="title"${attr("value", doc.title)} required class="mt-1 block w-full px-3 py-2 border rounded-md"/></div> <div><label for="type" class="block text-sm font-medium">Type (e.g., 'guide', 'spec')</label> <input type="text" name="type"${attr("value", doc.type)} class="mt-1 block w-full px-3 py-2 border rounded-md"/></div> <div><label for="content" class="block text-sm font-medium">Content</label> <textarea name="content" rows="12" required class="mt-1 block w-full px-3 py-2 border rounded-md">`;
  const $$body = escape_html(doc.content);
  if ($$body) {
    $$payload.out += `${$$body}`;
  }
  $$payload.out += `</textarea></div> <div class="flex justify-end space-x-2"><a href="/docs" class="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">Cancel</a> <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">Update Doc</button></div></form></div>`;
  bind_props($$props, { data });
}
var init_page_svelte3 = __esm({
  ".svelte-kit/output/server/entries/pages/docs/_id_/edit/_page.svelte.js"() {
    init_chunks();
    init_client();
    __name(_page3, "_page");
  }
});

// .svelte-kit/output/server/nodes/4.js
var __exports5 = {};
__export(__exports5, {
  component: () => component5,
  fonts: () => fonts5,
  imports: () => imports5,
  index: () => index5,
  server: () => page_server_exports2,
  server_id: () => server_id2,
  stylesheets: () => stylesheets5
});
var index5, component_cache5, component5, server_id2, imports5, stylesheets5, fonts5;
var init__5 = __esm({
  ".svelte-kit/output/server/nodes/4.js"() {
    init_page_server2();
    index5 = 4;
    component5 = /* @__PURE__ */ __name(async () => component_cache5 ??= (await Promise.resolve().then(() => (init_page_svelte3(), page_svelte_exports3))).default, "component");
    server_id2 = "src/routes/docs/[id]/edit/+page.server.js";
    imports5 = ["_app/immutable/nodes/4.BSJ30cfw.js", "_app/immutable/chunks/CWj6FrbW.js", "_app/immutable/chunks/69_IOA4Y.js", "_app/immutable/chunks/DIeogL5L.js", "_app/immutable/chunks/D_AdGWyy.js", "_app/immutable/chunks/CxhRu3wT.js", "_app/immutable/chunks/BMlzsybF.js", "_app/immutable/chunks/C2Bgqaw1.js", "_app/immutable/chunks/xeqJHUo9.js", "_app/immutable/chunks/ClAlbAGz.js", "_app/immutable/chunks/C7WNTl10.js", "_app/immutable/chunks/6lfPsB8W.js", "_app/immutable/chunks/Dj3WCWGW.js", "_app/immutable/chunks/BKg0ivWU.js", "_app/immutable/chunks/CamM0Y98.js"];
    stylesheets5 = [];
    fonts5 = [];
  }
});

// .svelte-kit/output/server/entries/pages/docs/new/_page.server.js
var page_server_exports3 = {};
__export(page_server_exports3, {
  actions: () => actions3,
  load: () => load3
});
async function load3({ platform }) {
  const { results } = await platform.env.DB.prepare("SELECT id, name FROM projects").all();
  return { projects: results };
}
var actions3;
var init_page_server3 = __esm({
  ".svelte-kit/output/server/entries/pages/docs/new/_page.server.js"() {
    init_index2();
    __name(load3, "load");
    actions3 = {
      default: /* @__PURE__ */ __name(async ({ request, platform }) => {
        const formData = await request.formData();
        const data = Object.fromEntries(formData);
        if (!data.title || !data.content || !data.project_id) {
          return fail(400, { data, missing: true });
        }
        try {
          await platform.env.DB.prepare(
            "INSERT INTO docs (project_id, title, content, type) VALUES (?, ?, ?, ?)"
          ).bind(data.project_id, data.title, data.content, data.type).run();
          throw redirect(303, `/docs`);
        } catch (error2) {
          if (error2.status === 303) throw error2;
          return fail(500, { message: "Could not create the doc." });
        }
      }, "default")
    };
  }
});

// .svelte-kit/output/server/entries/pages/docs/new/_page.svelte.js
var page_svelte_exports4 = {};
__export(page_svelte_exports4, {
  default: () => _page4
});
function _page4($$payload, $$props) {
  push();
  let data = $$props["data"];
  const each_array = ensure_array_like(data.projects);
  $$payload.out += `<div class="container mx-auto p-4 max-w-lg"><h1 class="text-2xl font-bold mb-4">New Doc</h1> <form method="POST" class="space-y-4"><div><label for="project_id" class="block text-sm font-medium">Project</label> <select name="project_id" required class="mt-1 block w-full px-3 py-2 border rounded-md"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let project = each_array[$$index];
    $$payload.out += `<option${attr("value", project.id)}${maybe_selected($$payload, project.id)}>${escape_html(project.name)}</option>`;
  }
  $$payload.out += `<!--]--></select></div> <div><label for="title" class="block text-sm font-medium">Title</label> <input type="text" name="title" required class="mt-1 block w-full px-3 py-2 border rounded-md"/></div> <div><label for="type" class="block text-sm font-medium">Type (e.g., 'guide', 'spec')</label> <input type="text" name="type" class="mt-1 block w-full px-3 py-2 border rounded-md"/></div> <div><label for="content" class="block text-sm font-medium">Content</label> <textarea name="content" rows="12" required class="mt-1 block w-full px-3 py-2 border rounded-md"></textarea></div> <div class="flex justify-end space-x-2"><a href="/docs" class="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">Cancel</a> <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">Create Doc</button></div></form></div>`;
  bind_props($$props, { data });
  pop();
}
var init_page_svelte4 = __esm({
  ".svelte-kit/output/server/entries/pages/docs/new/_page.svelte.js"() {
    init_chunks();
    init_client();
    __name(_page4, "_page");
  }
});

// .svelte-kit/output/server/nodes/5.js
var __exports6 = {};
__export(__exports6, {
  component: () => component6,
  fonts: () => fonts6,
  imports: () => imports6,
  index: () => index6,
  server: () => page_server_exports3,
  server_id: () => server_id3,
  stylesheets: () => stylesheets6
});
var index6, component_cache6, component6, server_id3, imports6, stylesheets6, fonts6;
var init__6 = __esm({
  ".svelte-kit/output/server/nodes/5.js"() {
    init_page_server3();
    index6 = 5;
    component6 = /* @__PURE__ */ __name(async () => component_cache6 ??= (await Promise.resolve().then(() => (init_page_svelte4(), page_svelte_exports4))).default, "component");
    server_id3 = "src/routes/docs/new/+page.server.js";
    imports6 = ["_app/immutable/nodes/5.DmrwEqua.js", "_app/immutable/chunks/CWj6FrbW.js", "_app/immutable/chunks/69_IOA4Y.js", "_app/immutable/chunks/DIeogL5L.js", "_app/immutable/chunks/D_AdGWyy.js", "_app/immutable/chunks/CxhRu3wT.js", "_app/immutable/chunks/BMlzsybF.js", "_app/immutable/chunks/C2Bgqaw1.js", "_app/immutable/chunks/xeqJHUo9.js", "_app/immutable/chunks/ClAlbAGz.js", "_app/immutable/chunks/C7WNTl10.js", "_app/immutable/chunks/6lfPsB8W.js", "_app/immutable/chunks/COTeNld2.js", "_app/immutable/chunks/BKg0ivWU.js", "_app/immutable/chunks/CamM0Y98.js"];
    stylesheets6 = [];
    fonts6 = [];
  }
});

// .svelte-kit/output/server/entries/pages/goals/_page.server.js
var page_server_exports4 = {};
__export(page_server_exports4, {
  actions: () => actions4,
  load: () => load4
});
async function load4({ platform }) {
  const { results } = await platform.env.DB.prepare(
    `SELECT goals.*, projects.name as project_name 
     FROM goals 
     JOIN projects ON goals.project_id = projects.id 
     ORDER BY target_date ASC`
  ).all();
  return { goals: results };
}
var actions4;
var init_page_server4 = __esm({
  ".svelte-kit/output/server/entries/pages/goals/_page.server.js"() {
    init_index2();
    __name(load4, "load");
    actions4 = {
      delete: /* @__PURE__ */ __name(async ({ request, platform }) => {
        const formData = await request.formData();
        const id = formData.get("id");
        try {
          await platform.env.DB.prepare("DELETE FROM goals WHERE id = ?").bind(id).run();
          return { success: true };
        } catch (error2) {
          return fail(500, { message: "Failed to delete goal" });
        }
      }, "delete"),
      toggleStatus: /* @__PURE__ */ __name(async ({ request, platform }) => {
        const formData = await request.formData();
        const id = formData.get("id");
        const status = formData.get("status");
        const nextStatus = {
          "planned": "in_progress",
          "in_progress": "completed",
          "completed": "planned"
        }[status] || "planned";
        try {
          await platform.env.DB.prepare(
            "UPDATE goals SET status = ? WHERE id = ?"
          ).bind(nextStatus, id).run();
          return { success: true };
        } catch (error2) {
          return fail(500, { message: "Failed to update status" });
        }
      }, "toggleStatus")
    };
  }
});

// .svelte-kit/output/server/chunks/types.js
var PRIORITY_LABELS, PRIORITY_COLORS, GOAL_STATUS_LABELS, GOAL_STATUS_COLORS;
var init_types = __esm({
  ".svelte-kit/output/server/chunks/types.js"() {
    PRIORITY_LABELS = {
      0: "Low",
      1: "Medium",
      2: "High"
    };
    PRIORITY_COLORS = {
      0: "text-green-600",
      1: "text-yellow-600",
      2: "text-red-600"
    };
    GOAL_STATUS_LABELS = {
      planned: "Planned",
      in_progress: "In Progress",
      completed: "Completed"
    };
    GOAL_STATUS_COLORS = {
      planned: "bg-gray-100 text-gray-800",
      in_progress: "bg-blue-100 text-blue-800",
      completed: "bg-green-100 text-green-800"
    };
  }
});

// .svelte-kit/output/server/entries/pages/goals/_page.svelte.js
var page_svelte_exports5 = {};
__export(page_svelte_exports5, {
  default: () => _page5
});
function _page5($$payload, $$props) {
  push();
  let data = $$props["data"];
  const each_array = ensure_array_like(data.goals);
  $$payload.out += `<div class="container mx-auto p-4"><div class="flex justify-between items-center mb-4"><h1 class="text-2xl font-bold">Goals</h1> <a href="/goals/new" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">New Goal</a></div> <div class="space-y-4"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let goal = each_array[$$index];
    $$payload.out += `<div class="border p-4 rounded-lg shadow-sm flex justify-between items-start"><div><h2 class="text-xl font-semibold">${escape_html(goal.title)}</h2> <p class="text-gray-600">${escape_html(goal.description)}</p> <p class="text-sm text-gray-500">Project: ${escape_html(goal.project_name)}</p> `;
    if (goal.target_date) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<p class="text-sm text-gray-500">Target: ${escape_html(new Date(goal.target_date).toLocaleDateString())}</p>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div> <div class="flex items-center space-x-3"><form method="POST" action="?/toggleStatus"><input type="hidden" name="id"${attr("value", goal.id)}/> <input type="hidden" name="status"${attr("value", goal.status)}/> <button type="submit"${attr_class(`text-sm font-medium px-2 py-1 rounded ${stringify(GOAL_STATUS_COLORS[goal.status])}`)}>${escape_html(GOAL_STATUS_LABELS[goal.status])}</button></form> <a${attr("href", `/goals/${stringify(goal.id)}/edit`)} class="text-yellow-500 hover:underline">Edit</a> <form method="POST" action="?/delete"><input type="hidden" name="id"${attr("value", goal.id)}/> <button type="submit" class="text-red-500 hover:underline">Delete</button></form></div></div>`;
  }
  $$payload.out += `<!--]--></div></div>`;
  bind_props($$props, { data });
  pop();
}
var init_page_svelte5 = __esm({
  ".svelte-kit/output/server/entries/pages/goals/_page.svelte.js"() {
    init_chunks();
    init_client();
    init_types();
    __name(_page5, "_page");
  }
});

// .svelte-kit/output/server/nodes/6.js
var __exports7 = {};
__export(__exports7, {
  component: () => component7,
  fonts: () => fonts7,
  imports: () => imports7,
  index: () => index7,
  server: () => page_server_exports4,
  server_id: () => server_id4,
  stylesheets: () => stylesheets7
});
var index7, component_cache7, component7, server_id4, imports7, stylesheets7, fonts7;
var init__7 = __esm({
  ".svelte-kit/output/server/nodes/6.js"() {
    init_page_server4();
    index7 = 6;
    component7 = /* @__PURE__ */ __name(async () => component_cache7 ??= (await Promise.resolve().then(() => (init_page_svelte5(), page_svelte_exports5))).default, "component");
    server_id4 = "src/routes/goals/+page.server.js";
    imports7 = ["_app/immutable/nodes/6.WCKTCvZD.js", "_app/immutable/chunks/CWj6FrbW.js", "_app/immutable/chunks/69_IOA4Y.js", "_app/immutable/chunks/DIeogL5L.js", "_app/immutable/chunks/D_AdGWyy.js", "_app/immutable/chunks/CxhRu3wT.js", "_app/immutable/chunks/BMlzsybF.js", "_app/immutable/chunks/-ucBVdge.js", "_app/immutable/chunks/C2Bgqaw1.js", "_app/immutable/chunks/xeqJHUo9.js", "_app/immutable/chunks/ClAlbAGz.js", "_app/immutable/chunks/C7WNTl10.js", "_app/immutable/chunks/6lfPsB8W.js", "_app/immutable/chunks/Dj3WCWGW.js", "_app/immutable/chunks/BNVceiNn.js", "_app/immutable/chunks/DkPbIObf.js", "_app/immutable/chunks/COTeNld2.js", "_app/immutable/chunks/BKg0ivWU.js", "_app/immutable/chunks/CamM0Y98.js", "_app/immutable/chunks/B7scx7VJ.js"];
    stylesheets7 = [];
    fonts7 = [];
  }
});

// .svelte-kit/output/server/entries/pages/goals/_id_/_page.server.js
var page_server_exports5 = {};
var init_page_server5 = __esm({
  ".svelte-kit/output/server/entries/pages/goals/_id_/_page.server.js"() {
  }
});

// .svelte-kit/output/server/entries/pages/goals/_id_/_page.svelte.js
var page_svelte_exports6 = {};
__export(page_svelte_exports6, {
  default: () => _page6
});
function _page6($$payload) {
}
var init_page_svelte6 = __esm({
  ".svelte-kit/output/server/entries/pages/goals/_id_/_page.svelte.js"() {
    init_clsx();
    __name(_page6, "_page");
  }
});

// .svelte-kit/output/server/nodes/7.js
var __exports8 = {};
__export(__exports8, {
  component: () => component8,
  fonts: () => fonts8,
  imports: () => imports8,
  index: () => index8,
  server: () => page_server_exports5,
  server_id: () => server_id5,
  stylesheets: () => stylesheets8
});
var index8, component_cache8, component8, server_id5, imports8, stylesheets8, fonts8;
var init__8 = __esm({
  ".svelte-kit/output/server/nodes/7.js"() {
    init_page_server5();
    index8 = 7;
    component8 = /* @__PURE__ */ __name(async () => component_cache8 ??= (await Promise.resolve().then(() => (init_page_svelte6(), page_svelte_exports6))).default, "component");
    server_id5 = "src/routes/goals/[id]/+page.server.js";
    imports8 = ["_app/immutable/nodes/7.CWG1ehzT.js", "_app/immutable/chunks/CWj6FrbW.js", "_app/immutable/chunks/69_IOA4Y.js", "_app/immutable/chunks/DIeogL5L.js"];
    stylesheets8 = [];
    fonts8 = [];
  }
});

// .svelte-kit/output/server/entries/pages/goals/_id_/edit/_page.server.js
var page_server_exports6 = {};
__export(page_server_exports6, {
  actions: () => actions5,
  load: () => load5
});
async function load5({ params, platform }) {
  const goal = await platform.env.DB.prepare("SELECT * FROM goals WHERE id = ?").bind(params.id).first();
  if (!goal) throw error(404, "Goal not found");
  const { results: projects } = await platform.env.DB.prepare("SELECT id, name FROM projects").all();
  return { goal, projects };
}
var actions5;
var init_page_server6 = __esm({
  ".svelte-kit/output/server/entries/pages/goals/_id_/edit/_page.server.js"() {
    init_index2();
    __name(load5, "load");
    actions5 = {
      default: /* @__PURE__ */ __name(async ({ request, params, platform }) => {
        const formData = await request.formData();
        const data = Object.fromEntries(formData);
        try {
          await platform.env.DB.prepare(
            `UPDATE goals SET project_id = ?, title = ?, description = ?, status = ?, target_date = ? 
         WHERE id = ?`
          ).bind(data.project_id, data.title, data.description, data.status, data.target_date || null, params.id).run();
          throw redirect(303, `/goals`);
        } catch (err) {
          if (err.status === 303) throw err;
          return fail(500, { message: "Could not update goal." });
        }
      }, "default")
    };
  }
});

// .svelte-kit/output/server/entries/pages/goals/_id_/edit/_page.svelte.js
var page_svelte_exports7 = {};
__export(page_svelte_exports7, {
  default: () => _page7
});
function _page7($$payload, $$props) {
  let data = $$props["data"];
  let { goal, projects } = data;
  const each_array = ensure_array_like(projects);
  $$payload.out += `<div class="container mx-auto p-4 max-w-lg"><h1 class="text-2xl font-bold mb-4">Edit Goal</h1> <form method="POST" class="space-y-4"><input type="hidden" name="id"${attr("value", goal.id)}/> <div><label for="project_id" class="block text-sm font-medium">Project</label> <select name="project_id" required class="mt-1 block w-full px-3 py-2 border rounded-md"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let project = each_array[$$index];
    $$payload.out += `<option${attr("value", project.id)}${maybe_selected($$payload, project.id)}${attr("selected", project.id === goal.project_id, true)}>${escape_html(project.name)}</option>`;
  }
  $$payload.out += `<!--]--></select></div> <div><label for="title" class="block text-sm font-medium">Title</label> <input type="text" name="title"${attr("value", goal.title)} required class="mt-1 block w-full px-3 py-2 border rounded-md"/></div> <div><label for="description" class="block text-sm font-medium">Description</label> <textarea name="description" rows="3" class="mt-1 block w-full px-3 py-2 border rounded-md">`;
  const $$body = escape_html(goal.description);
  if ($$body) {
    $$payload.out += `${$$body}`;
  }
  $$payload.out += `</textarea></div> <div><label for="target_date" class="block text-sm font-medium">Target Date</label> <input type="date" name="target_date"${attr("value", goal.target_date)} class="mt-1 block w-full px-3 py-2 border rounded-md"/></div> <div><label for="status" class="block text-sm font-medium">Status</label> <select name="status" class="mt-1 block w-full px-3 py-2 border rounded-md"><option value="planned"${maybe_selected($$payload, "planned")}${attr("selected", goal.status === "planned", true)}>Planned</option><option value="in_progress"${maybe_selected($$payload, "in_progress")}${attr("selected", goal.status === "in_progress", true)}>In Progress</option><option value="completed"${maybe_selected($$payload, "completed")}${attr("selected", goal.status === "completed", true)}>Completed</option></select></div> <div class="flex justify-end space-x-2"><a href="/goals" class="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">Cancel</a> <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">Update Goal</button></div></form></div>`;
  bind_props($$props, { data });
}
var init_page_svelte7 = __esm({
  ".svelte-kit/output/server/entries/pages/goals/_id_/edit/_page.svelte.js"() {
    init_chunks();
    init_client();
    __name(_page7, "_page");
  }
});

// .svelte-kit/output/server/nodes/8.js
var __exports9 = {};
__export(__exports9, {
  component: () => component9,
  fonts: () => fonts9,
  imports: () => imports9,
  index: () => index9,
  server: () => page_server_exports6,
  server_id: () => server_id6,
  stylesheets: () => stylesheets9
});
var index9, component_cache9, component9, server_id6, imports9, stylesheets9, fonts9;
var init__9 = __esm({
  ".svelte-kit/output/server/nodes/8.js"() {
    init_page_server6();
    index9 = 8;
    component9 = /* @__PURE__ */ __name(async () => component_cache9 ??= (await Promise.resolve().then(() => (init_page_svelte7(), page_svelte_exports7))).default, "component");
    server_id6 = "src/routes/goals/[id]/edit/+page.server.js";
    imports9 = ["_app/immutable/nodes/8.DEDnIoK-.js", "_app/immutable/chunks/CWj6FrbW.js", "_app/immutable/chunks/69_IOA4Y.js", "_app/immutable/chunks/DIeogL5L.js", "_app/immutable/chunks/D_AdGWyy.js", "_app/immutable/chunks/CxhRu3wT.js", "_app/immutable/chunks/BMlzsybF.js", "_app/immutable/chunks/C2Bgqaw1.js", "_app/immutable/chunks/xeqJHUo9.js", "_app/immutable/chunks/ClAlbAGz.js", "_app/immutable/chunks/C7WNTl10.js", "_app/immutable/chunks/6lfPsB8W.js", "_app/immutable/chunks/Dj3WCWGW.js", "_app/immutable/chunks/BKg0ivWU.js", "_app/immutable/chunks/CamM0Y98.js"];
    stylesheets9 = [];
    fonts9 = [];
  }
});

// .svelte-kit/output/server/entries/pages/goals/new/_page.server.js
var page_server_exports7 = {};
__export(page_server_exports7, {
  actions: () => actions6,
  load: () => load6
});
async function load6({ platform }) {
  const { results } = await platform.env.DB.prepare("SELECT id, name FROM projects").all();
  return { projects: results };
}
var actions6;
var init_page_server7 = __esm({
  ".svelte-kit/output/server/entries/pages/goals/new/_page.server.js"() {
    init_index2();
    __name(load6, "load");
    actions6 = {
      default: /* @__PURE__ */ __name(async ({ request, platform }) => {
        const formData = await request.formData();
        const data = Object.fromEntries(formData);
        if (!data.title || !data.project_id) {
          return fail(400, { data, missing: true });
        }
        try {
          await platform.env.DB.prepare(
            "INSERT INTO goals (project_id, title, description, status, target_date) VALUES (?, ?, ?, ?, ?)"
          ).bind(data.project_id, data.title, data.description, data.status, data.target_date || null).run();
          throw redirect(303, `/goals`);
        } catch (error2) {
          if (error2.status === 303) throw error2;
          return fail(500, { message: "Could not create the goal." });
        }
      }, "default")
    };
  }
});

// .svelte-kit/output/server/entries/pages/goals/new/_page.svelte.js
var page_svelte_exports8 = {};
__export(page_svelte_exports8, {
  default: () => _page8
});
function _page8($$payload, $$props) {
  push();
  let data = $$props["data"];
  const each_array = ensure_array_like(data.projects);
  $$payload.out += `<div class="container mx-auto p-4 max-w-lg"><h1 class="text-2xl font-bold mb-4">New Goal</h1> <form method="POST" class="space-y-4"><div><label for="project_id" class="block text-sm font-medium">Project</label> <select name="project_id" required class="mt-1 block w-full px-3 py-2 border rounded-md"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let project = each_array[$$index];
    $$payload.out += `<option${attr("value", project.id)}${maybe_selected($$payload, project.id)}>${escape_html(project.name)}</option>`;
  }
  $$payload.out += `<!--]--></select></div> <div><label for="title" class="block text-sm font-medium">Title</label> <input type="text" name="title" required class="mt-1 block w-full px-3 py-2 border rounded-md"/></div> <div><label for="description" class="block text-sm font-medium">Description</label> <textarea name="description" rows="3" class="mt-1 block w-full px-3 py-2 border rounded-md"></textarea></div> <div><label for="target_date" class="block text-sm font-medium">Target Date</label> <input type="date" name="target_date" class="mt-1 block w-full px-3 py-2 border rounded-md"/></div> <div><label for="status" class="block text-sm font-medium">Status</label> <select name="status" class="mt-1 block w-full px-3 py-2 border rounded-md"><option value="planned"${maybe_selected($$payload, "planned")} selected>Planned</option><option value="in_progress"${maybe_selected($$payload, "in_progress")}>In Progress</option><option value="completed"${maybe_selected($$payload, "completed")}>Completed</option></select></div> <div class="flex justify-end space-x-2"><a href="/goals" class="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">Cancel</a> <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">Create Goal</button></div></form></div>`;
  bind_props($$props, { data });
  pop();
}
var init_page_svelte8 = __esm({
  ".svelte-kit/output/server/entries/pages/goals/new/_page.svelte.js"() {
    init_chunks();
    init_client();
    __name(_page8, "_page");
  }
});

// .svelte-kit/output/server/nodes/9.js
var __exports10 = {};
__export(__exports10, {
  component: () => component10,
  fonts: () => fonts10,
  imports: () => imports10,
  index: () => index10,
  server: () => page_server_exports7,
  server_id: () => server_id7,
  stylesheets: () => stylesheets10
});
var index10, component_cache10, component10, server_id7, imports10, stylesheets10, fonts10;
var init__10 = __esm({
  ".svelte-kit/output/server/nodes/9.js"() {
    init_page_server7();
    index10 = 9;
    component10 = /* @__PURE__ */ __name(async () => component_cache10 ??= (await Promise.resolve().then(() => (init_page_svelte8(), page_svelte_exports8))).default, "component");
    server_id7 = "src/routes/goals/new/+page.server.js";
    imports10 = ["_app/immutable/nodes/9.-aW3d9RN.js", "_app/immutable/chunks/CWj6FrbW.js", "_app/immutable/chunks/69_IOA4Y.js", "_app/immutable/chunks/DIeogL5L.js", "_app/immutable/chunks/D_AdGWyy.js", "_app/immutable/chunks/CxhRu3wT.js", "_app/immutable/chunks/BMlzsybF.js", "_app/immutable/chunks/C2Bgqaw1.js", "_app/immutable/chunks/xeqJHUo9.js", "_app/immutable/chunks/ClAlbAGz.js", "_app/immutable/chunks/C7WNTl10.js", "_app/immutable/chunks/6lfPsB8W.js", "_app/immutable/chunks/COTeNld2.js", "_app/immutable/chunks/BKg0ivWU.js", "_app/immutable/chunks/CamM0Y98.js"];
    stylesheets10 = [];
    fonts10 = [];
  }
});

// .svelte-kit/output/server/entries/pages/ideas/_page.server.js
var page_server_exports8 = {};
__export(page_server_exports8, {
  actions: () => actions7,
  load: () => load7
});
async function load7({ platform }) {
  const { results } = await platform.env.DB.prepare(
    `SELECT ideas.*, projects.name as project_name 
     FROM ideas 
     JOIN projects ON ideas.project_id = projects.id 
     ORDER BY starred DESC, created_at DESC`
  ).all();
  return { ideas: results };
}
var actions7;
var init_page_server8 = __esm({
  ".svelte-kit/output/server/entries/pages/ideas/_page.server.js"() {
    init_index2();
    __name(load7, "load");
    actions7 = {
      delete: /* @__PURE__ */ __name(async ({ request, platform }) => {
        const id = (await request.formData()).get("id");
        try {
          await platform.env.DB.prepare("DELETE FROM ideas WHERE id = ?").bind(id).run();
          return { success: true };
        } catch (error2) {
          return fail(500, { message: "Failed to delete idea" });
        }
      }, "delete"),
      toggleStarred: /* @__PURE__ */ __name(async ({ request, platform }) => {
        const formData = await request.formData();
        const id = formData.get("id");
        const starred = formData.get("starred");
        try {
          await platform.env.DB.prepare(
            "UPDATE ideas SET starred = ? WHERE id = ?"
          ).bind(starred === "1" ? 0 : 1, id).run();
          return { success: true };
        } catch (error2) {
          return fail(500, { message: "Failed to update idea" });
        }
      }, "toggleStarred")
    };
  }
});

// .svelte-kit/output/server/entries/pages/ideas/_page.svelte.js
var page_svelte_exports9 = {};
__export(page_svelte_exports9, {
  default: () => _page9
});
function _page9($$payload, $$props) {
  push();
  let data = $$props["data"];
  const each_array = ensure_array_like(data.ideas);
  $$payload.out += `<div class="container mx-auto p-4"><div class="flex justify-between items-center mb-4"><h1 class="text-2xl font-bold">Ideas</h1> <a href="/ideas/new" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">New Idea</a></div> <div class="space-y-4"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let idea = each_array[$$index];
    $$payload.out += `<div class="border p-4 rounded-lg shadow-sm flex justify-between items-start"><div><h2 class="text-xl font-semibold">${escape_html(idea.title)}</h2> <p class="text-gray-600">${escape_html(idea.description)}</p> <p class="text-sm text-gray-500">Project: ${escape_html(idea.project_name)}</p></div> <div class="flex items-center space-x-3"><form method="POST" action="?/toggleStarred"><input type="hidden" name="id"${attr("value", idea.id)}/> <input type="hidden" name="starred"${attr("value", idea.starred)}/> <button type="submit" class="text-2xl">`;
    if (idea.starred) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span class="text-yellow-400">\u2605</span>`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<span class="text-gray-400">\u2606</span>`;
    }
    $$payload.out += `<!--]--></button></form> <a${attr("href", `/ideas/${stringify(idea.id)}/edit`)} class="text-yellow-500 hover:underline">Edit</a> <form method="POST" action="?/delete"><input type="hidden" name="id"${attr("value", idea.id)}/> <button type="submit" class="text-red-500 hover:underline">Delete</button></form></div></div>`;
  }
  $$payload.out += `<!--]--></div></div>`;
  bind_props($$props, { data });
  pop();
}
var init_page_svelte9 = __esm({
  ".svelte-kit/output/server/entries/pages/ideas/_page.svelte.js"() {
    init_chunks();
    init_client();
    __name(_page9, "_page");
  }
});

// .svelte-kit/output/server/nodes/10.js
var __exports11 = {};
__export(__exports11, {
  component: () => component11,
  fonts: () => fonts11,
  imports: () => imports11,
  index: () => index11,
  server: () => page_server_exports8,
  server_id: () => server_id8,
  stylesheets: () => stylesheets11
});
var index11, component_cache11, component11, server_id8, imports11, stylesheets11, fonts11;
var init__11 = __esm({
  ".svelte-kit/output/server/nodes/10.js"() {
    init_page_server8();
    index11 = 10;
    component11 = /* @__PURE__ */ __name(async () => component_cache11 ??= (await Promise.resolve().then(() => (init_page_svelte9(), page_svelte_exports9))).default, "component");
    server_id8 = "src/routes/ideas/+page.server.js";
    imports11 = ["_app/immutable/nodes/10.Cq5gBleb.js", "_app/immutable/chunks/CWj6FrbW.js", "_app/immutable/chunks/69_IOA4Y.js", "_app/immutable/chunks/DIeogL5L.js", "_app/immutable/chunks/D_AdGWyy.js", "_app/immutable/chunks/CxhRu3wT.js", "_app/immutable/chunks/BMlzsybF.js", "_app/immutable/chunks/-ucBVdge.js", "_app/immutable/chunks/C2Bgqaw1.js", "_app/immutable/chunks/xeqJHUo9.js", "_app/immutable/chunks/ClAlbAGz.js", "_app/immutable/chunks/C7WNTl10.js", "_app/immutable/chunks/6lfPsB8W.js", "_app/immutable/chunks/Dj3WCWGW.js", "_app/immutable/chunks/COTeNld2.js", "_app/immutable/chunks/BKg0ivWU.js", "_app/immutable/chunks/CamM0Y98.js"];
    stylesheets11 = [];
    fonts11 = [];
  }
});

// .svelte-kit/output/server/entries/pages/ideas/_id_/_page.server.js
var page_server_exports9 = {};
var init_page_server9 = __esm({
  ".svelte-kit/output/server/entries/pages/ideas/_id_/_page.server.js"() {
  }
});

// .svelte-kit/output/server/entries/pages/ideas/_id_/_page.svelte.js
var page_svelte_exports10 = {};
__export(page_svelte_exports10, {
  default: () => _page10
});
function _page10($$payload) {
}
var init_page_svelte10 = __esm({
  ".svelte-kit/output/server/entries/pages/ideas/_id_/_page.svelte.js"() {
    init_clsx();
    __name(_page10, "_page");
  }
});

// .svelte-kit/output/server/nodes/11.js
var __exports12 = {};
__export(__exports12, {
  component: () => component12,
  fonts: () => fonts12,
  imports: () => imports12,
  index: () => index12,
  server: () => page_server_exports9,
  server_id: () => server_id9,
  stylesheets: () => stylesheets12
});
var index12, component_cache12, component12, server_id9, imports12, stylesheets12, fonts12;
var init__12 = __esm({
  ".svelte-kit/output/server/nodes/11.js"() {
    init_page_server9();
    index12 = 11;
    component12 = /* @__PURE__ */ __name(async () => component_cache12 ??= (await Promise.resolve().then(() => (init_page_svelte10(), page_svelte_exports10))).default, "component");
    server_id9 = "src/routes/ideas/[id]/+page.server.js";
    imports12 = ["_app/immutable/nodes/11.CWG1ehzT.js", "_app/immutable/chunks/CWj6FrbW.js", "_app/immutable/chunks/69_IOA4Y.js", "_app/immutable/chunks/DIeogL5L.js"];
    stylesheets12 = [];
    fonts12 = [];
  }
});

// .svelte-kit/output/server/entries/pages/ideas/_id_/edit/_page.server.js
var page_server_exports10 = {};
__export(page_server_exports10, {
  actions: () => actions8,
  load: () => load8
});
async function load8({ params, platform }) {
  const idea = await platform.env.DB.prepare("SELECT * FROM ideas WHERE id = ?").bind(params.id).first();
  if (!idea) throw error(404, "Idea not found");
  const { results: projects } = await platform.env.DB.prepare("SELECT id, name FROM projects").all();
  return { idea, projects };
}
var actions8;
var init_page_server10 = __esm({
  ".svelte-kit/output/server/entries/pages/ideas/_id_/edit/_page.server.js"() {
    init_index2();
    __name(load8, "load");
    actions8 = {
      default: /* @__PURE__ */ __name(async ({ request, params, platform }) => {
        const formData = await request.formData();
        const data = Object.fromEntries(formData);
        const starred = data.starred ? 1 : 0;
        try {
          await platform.env.DB.prepare(
            `UPDATE ideas SET project_id = ?, title = ?, description = ?, starred = ? 
         WHERE id = ?`
          ).bind(data.project_id, data.title, data.description, starred, params.id).run();
          throw redirect(303, `/ideas`);
        } catch (err) {
          if (err.status === 303) throw err;
          return fail(500, { message: "Could not update idea." });
        }
      }, "default")
    };
  }
});

// .svelte-kit/output/server/entries/pages/ideas/_id_/edit/_page.svelte.js
var page_svelte_exports11 = {};
__export(page_svelte_exports11, {
  default: () => _page11
});
function _page11($$payload, $$props) {
  let data = $$props["data"];
  let { idea, projects } = data;
  const each_array = ensure_array_like(projects);
  $$payload.out += `<div class="container mx-auto p-4 max-w-lg"><h1 class="text-2xl font-bold mb-4">Edit Idea</h1> <form method="POST" class="space-y-4"><input type="hidden" name="id"${attr("value", idea.id)}/> <div><label for="project_id" class="block text-sm font-medium">Project</label> <select name="project_id" required class="mt-1 block w-full px-3 py-2 border rounded-md"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let project = each_array[$$index];
    $$payload.out += `<option${attr("value", project.id)}${maybe_selected($$payload, project.id)}${attr("selected", project.id === idea.project_id, true)}>${escape_html(project.name)}</option>`;
  }
  $$payload.out += `<!--]--></select></div> <div><label for="title" class="block text-sm font-medium">Title</label> <input type="text" name="title"${attr("value", idea.title)} required class="mt-1 block w-full px-3 py-2 border rounded-md"/></div> <div><label for="description" class="block text-sm font-medium">Description</label> <textarea name="description" rows="3" class="mt-1 block w-full px-3 py-2 border rounded-md">`;
  const $$body = escape_html(idea.description);
  if ($$body) {
    $$payload.out += `${$$body}`;
  }
  $$payload.out += `</textarea></div> <div class="flex items-center"><input type="checkbox" name="starred"${attr("checked", !!idea.starred, true)} class="h-4 w-4 text-blue-600 border-gray-300 rounded"/> <label for="starred" class="ml-2 block text-sm">Star this idea</label></div> <div class="flex justify-end space-x-2"><a href="/ideas" class="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">Cancel</a> <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">Update Idea</button></div></form></div>`;
  bind_props($$props, { data });
}
var init_page_svelte11 = __esm({
  ".svelte-kit/output/server/entries/pages/ideas/_id_/edit/_page.svelte.js"() {
    init_chunks();
    init_client();
    __name(_page11, "_page");
  }
});

// .svelte-kit/output/server/nodes/12.js
var __exports13 = {};
__export(__exports13, {
  component: () => component13,
  fonts: () => fonts13,
  imports: () => imports13,
  index: () => index13,
  server: () => page_server_exports10,
  server_id: () => server_id10,
  stylesheets: () => stylesheets13
});
var index13, component_cache13, component13, server_id10, imports13, stylesheets13, fonts13;
var init__13 = __esm({
  ".svelte-kit/output/server/nodes/12.js"() {
    init_page_server10();
    index13 = 12;
    component13 = /* @__PURE__ */ __name(async () => component_cache13 ??= (await Promise.resolve().then(() => (init_page_svelte11(), page_svelte_exports11))).default, "component");
    server_id10 = "src/routes/ideas/[id]/edit/+page.server.js";
    imports13 = ["_app/immutable/nodes/12.ms1yC2xo.js", "_app/immutable/chunks/CWj6FrbW.js", "_app/immutable/chunks/69_IOA4Y.js", "_app/immutable/chunks/DIeogL5L.js", "_app/immutable/chunks/D_AdGWyy.js", "_app/immutable/chunks/CxhRu3wT.js", "_app/immutable/chunks/BMlzsybF.js", "_app/immutable/chunks/C2Bgqaw1.js", "_app/immutable/chunks/xeqJHUo9.js", "_app/immutable/chunks/ClAlbAGz.js", "_app/immutable/chunks/C7WNTl10.js", "_app/immutable/chunks/6lfPsB8W.js", "_app/immutable/chunks/Dj3WCWGW.js", "_app/immutable/chunks/BKg0ivWU.js", "_app/immutable/chunks/CamM0Y98.js"];
    stylesheets13 = [];
    fonts13 = [];
  }
});

// .svelte-kit/output/server/entries/pages/ideas/new/_page.server.js
var page_server_exports11 = {};
__export(page_server_exports11, {
  actions: () => actions9,
  load: () => load9
});
async function load9({ platform }) {
  const { results } = await platform.env.DB.prepare("SELECT id, name FROM projects").all();
  return { projects: results };
}
var actions9;
var init_page_server11 = __esm({
  ".svelte-kit/output/server/entries/pages/ideas/new/_page.server.js"() {
    init_index2();
    __name(load9, "load");
    actions9 = {
      default: /* @__PURE__ */ __name(async ({ request, platform }) => {
        const formData = await request.formData();
        const data = Object.fromEntries(formData);
        const starred = data.starred ? 1 : 0;
        if (!data.title || !data.project_id) {
          return fail(400, { data, missing: true });
        }
        try {
          await platform.env.DB.prepare(
            "INSERT INTO ideas (project_id, title, description, starred) VALUES (?, ?, ?, ?)"
          ).bind(data.project_id, data.title, data.description, starred).run();
          throw redirect(303, `/ideas`);
        } catch (error2) {
          if (error2.status === 303) throw error2;
          return fail(500, { message: "Could not create the idea." });
        }
      }, "default")
    };
  }
});

// .svelte-kit/output/server/entries/pages/ideas/new/_page.svelte.js
var page_svelte_exports12 = {};
__export(page_svelte_exports12, {
  default: () => _page12
});
function _page12($$payload, $$props) {
  push();
  let data = $$props["data"];
  const each_array = ensure_array_like(data.projects);
  $$payload.out += `<div class="container mx-auto p-4 max-w-lg"><h1 class="text-2xl font-bold mb-4">New Idea</h1> <form method="POST" class="space-y-4"><div><label for="project_id" class="block text-sm font-medium">Project</label> <select name="project_id" required class="mt-1 block w-full px-3 py-2 border rounded-md"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let project = each_array[$$index];
    $$payload.out += `<option${attr("value", project.id)}${maybe_selected($$payload, project.id)}>${escape_html(project.name)}</option>`;
  }
  $$payload.out += `<!--]--></select></div> <div><label for="title" class="block text-sm font-medium">Title</label> <input type="text" name="title" required class="mt-1 block w-full px-3 py-2 border rounded-md"/></div> <div><label for="description" class="block text-sm font-medium">Description</label> <textarea name="description" rows="3" class="mt-1 block w-full px-3 py-2 border rounded-md"></textarea></div> <div class="flex items-center"><input type="checkbox" name="starred" class="h-4 w-4 text-blue-600 border-gray-300 rounded"/> <label for="starred" class="ml-2 block text-sm">Star this idea</label></div> <div class="flex justify-end space-x-2"><a href="/ideas" class="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">Cancel</a> <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">Create Idea</button></div></form></div>`;
  bind_props($$props, { data });
  pop();
}
var init_page_svelte12 = __esm({
  ".svelte-kit/output/server/entries/pages/ideas/new/_page.svelte.js"() {
    init_chunks();
    init_client();
    __name(_page12, "_page");
  }
});

// .svelte-kit/output/server/nodes/13.js
var __exports14 = {};
__export(__exports14, {
  component: () => component14,
  fonts: () => fonts14,
  imports: () => imports14,
  index: () => index14,
  server: () => page_server_exports11,
  server_id: () => server_id11,
  stylesheets: () => stylesheets14
});
var index14, component_cache14, component14, server_id11, imports14, stylesheets14, fonts14;
var init__14 = __esm({
  ".svelte-kit/output/server/nodes/13.js"() {
    init_page_server11();
    index14 = 13;
    component14 = /* @__PURE__ */ __name(async () => component_cache14 ??= (await Promise.resolve().then(() => (init_page_svelte12(), page_svelte_exports12))).default, "component");
    server_id11 = "src/routes/ideas/new/+page.server.js";
    imports14 = ["_app/immutable/nodes/13.U0prqWIj.js", "_app/immutable/chunks/CWj6FrbW.js", "_app/immutable/chunks/69_IOA4Y.js", "_app/immutable/chunks/DIeogL5L.js", "_app/immutable/chunks/D_AdGWyy.js", "_app/immutable/chunks/CxhRu3wT.js", "_app/immutable/chunks/BMlzsybF.js", "_app/immutable/chunks/C2Bgqaw1.js", "_app/immutable/chunks/xeqJHUo9.js", "_app/immutable/chunks/ClAlbAGz.js", "_app/immutable/chunks/C7WNTl10.js", "_app/immutable/chunks/6lfPsB8W.js", "_app/immutable/chunks/COTeNld2.js", "_app/immutable/chunks/BKg0ivWU.js", "_app/immutable/chunks/CamM0Y98.js"];
    stylesheets14 = [];
    fonts14 = [];
  }
});

// .svelte-kit/output/server/entries/pages/notes/_page.server.js
var page_server_exports12 = {};
__export(page_server_exports12, {
  actions: () => actions10,
  load: () => load10
});
async function load10({ platform }) {
  const { results } = await platform.env.DB.prepare(
    `SELECT notes.*, projects.name as project_name 
     FROM notes 
     JOIN projects ON notes.project_id = projects.id`
  ).all();
  return { notes: results };
}
var actions10;
var init_page_server12 = __esm({
  ".svelte-kit/output/server/entries/pages/notes/_page.server.js"() {
    init_index2();
    __name(load10, "load");
    actions10 = {
      delete: /* @__PURE__ */ __name(async ({ request, platform }) => {
        const formData = await request.formData();
        const id = formData.get("id");
        if (!id) {
          return fail(400, { message: "Note ID is required" });
        }
        try {
          await platform.env.DB.prepare("DELETE FROM notes WHERE id = ?").bind(id).run();
          return { success: true };
        } catch (error2) {
          console.error(error2);
          return fail(500, { message: "Failed to delete note" });
        }
      }, "delete")
    };
  }
});

// .svelte-kit/output/server/entries/pages/notes/_page.svelte.js
var page_svelte_exports13 = {};
__export(page_svelte_exports13, {
  default: () => _page13
});
function _page13($$payload, $$props) {
  push();
  let data = $$props["data"];
  const each_array = ensure_array_like(data.notes);
  $$payload.out += `<div class="container mx-auto p-4"><div class="flex justify-between items-center mb-4"><h1 class="text-2xl font-bold">Notes</h1> <a href="/notes/new" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">New Note</a></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let note = each_array[$$index];
    $$payload.out += `<div class="border p-4 rounded-lg shadow-sm flex flex-col justify-between"><div><h2 class="text-xl font-semibold">${escape_html(note.title)}</h2> <p class="text-gray-500 text-sm mb-2">Project: ${escape_html(note.project_name)}</p> <p class="text-gray-700 whitespace-pre-wrap truncate h-24">${escape_html(note.content)}</p></div> <div class="flex justify-end space-x-2 mt-4"><a${attr("href", `/notes/${stringify(note.id)}`)} class="text-blue-500 hover:underline">View</a> <a${attr("href", `/notes/${stringify(note.id)}/edit`)} class="text-yellow-500 hover:underline">Edit</a> <form method="POST" action="?/delete"><input type="hidden" name="id"${attr("value", note.id)}/> <button type="submit" class="text-red-500 hover:underline">Delete</button></form></div></div>`;
  }
  $$payload.out += `<!--]--></div></div>`;
  bind_props($$props, { data });
  pop();
}
var init_page_svelte13 = __esm({
  ".svelte-kit/output/server/entries/pages/notes/_page.svelte.js"() {
    init_chunks();
    init_client();
    __name(_page13, "_page");
  }
});

// .svelte-kit/output/server/nodes/14.js
var __exports15 = {};
__export(__exports15, {
  component: () => component15,
  fonts: () => fonts15,
  imports: () => imports15,
  index: () => index15,
  server: () => page_server_exports12,
  server_id: () => server_id12,
  stylesheets: () => stylesheets15
});
var index15, component_cache15, component15, server_id12, imports15, stylesheets15, fonts15;
var init__15 = __esm({
  ".svelte-kit/output/server/nodes/14.js"() {
    init_page_server12();
    index15 = 14;
    component15 = /* @__PURE__ */ __name(async () => component_cache15 ??= (await Promise.resolve().then(() => (init_page_svelte13(), page_svelte_exports13))).default, "component");
    server_id12 = "src/routes/notes/+page.server.js";
    imports15 = ["_app/immutable/nodes/14.bAR4WF4j.js", "_app/immutable/chunks/CWj6FrbW.js", "_app/immutable/chunks/69_IOA4Y.js", "_app/immutable/chunks/DIeogL5L.js", "_app/immutable/chunks/D_AdGWyy.js", "_app/immutable/chunks/CxhRu3wT.js", "_app/immutable/chunks/BMlzsybF.js", "_app/immutable/chunks/C2Bgqaw1.js", "_app/immutable/chunks/xeqJHUo9.js", "_app/immutable/chunks/ClAlbAGz.js", "_app/immutable/chunks/C7WNTl10.js", "_app/immutable/chunks/6lfPsB8W.js", "_app/immutable/chunks/Dj3WCWGW.js", "_app/immutable/chunks/COTeNld2.js", "_app/immutable/chunks/BKg0ivWU.js", "_app/immutable/chunks/CamM0Y98.js"];
    stylesheets15 = [];
    fonts15 = [];
  }
});

// .svelte-kit/output/server/entries/pages/notes/_id_/_page.server.js
var page_server_exports13 = {};
__export(page_server_exports13, {
  load: () => load11
});
async function load11({ params, platform }) {
  const { id } = params;
  const note = await platform.env.DB.prepare(
    "SELECT * FROM notes WHERE id = ?"
  ).bind(id).first();
  if (!note) {
    throw error(404, "Note not found");
  }
  return { note };
}
var init_page_server13 = __esm({
  ".svelte-kit/output/server/entries/pages/notes/_id_/_page.server.js"() {
    init_index2();
    __name(load11, "load");
  }
});

// .svelte-kit/output/server/entries/pages/notes/_id_/_page.svelte.js
var page_svelte_exports14 = {};
__export(page_svelte_exports14, {
  default: () => _page14
});
function _page14($$payload, $$props) {
  push();
  let data = $$props["data"];
  const { note } = data;
  $$payload.out += `<div class="container mx-auto p-4 max-w-2xl"><div class="mb-4"><a href="/notes" class="text-blue-500 hover:underline">\u2190 Back to Notes</a></div> <div class="border p-6 rounded-lg shadow-sm bg-white"><h1 class="text-3xl font-bold mb-2">${escape_html(note.title)}</h1> <div class="text-sm text-gray-500 mb-4"><p>Last Updated: ${escape_html(new Date(note.updated_at).toLocaleString())}</p></div> <div class="prose max-w-none"><p class="whitespace-pre-wrap">${escape_html(note.content)}</p></div> <div class="flex justify-end mt-6"><a${attr("href", `/notes/${stringify(note.id)}/edit`)} class="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">Edit Note</a></div></div></div>`;
  bind_props($$props, { data });
  pop();
}
var init_page_svelte14 = __esm({
  ".svelte-kit/output/server/entries/pages/notes/_id_/_page.svelte.js"() {
    init_chunks();
    __name(_page14, "_page");
  }
});

// .svelte-kit/output/server/nodes/15.js
var __exports16 = {};
__export(__exports16, {
  component: () => component16,
  fonts: () => fonts16,
  imports: () => imports16,
  index: () => index16,
  server: () => page_server_exports13,
  server_id: () => server_id13,
  stylesheets: () => stylesheets16
});
var index16, component_cache16, component16, server_id13, imports16, stylesheets16, fonts16;
var init__16 = __esm({
  ".svelte-kit/output/server/nodes/15.js"() {
    init_page_server13();
    index16 = 15;
    component16 = /* @__PURE__ */ __name(async () => component_cache16 ??= (await Promise.resolve().then(() => (init_page_svelte14(), page_svelte_exports14))).default, "component");
    server_id13 = "src/routes/notes/[id]/+page.server.js";
    imports16 = ["_app/immutable/nodes/15.BQ4OG7r6.js", "_app/immutable/chunks/CWj6FrbW.js", "_app/immutable/chunks/69_IOA4Y.js", "_app/immutable/chunks/DIeogL5L.js", "_app/immutable/chunks/D_AdGWyy.js", "_app/immutable/chunks/CxhRu3wT.js", "_app/immutable/chunks/BMlzsybF.js", "_app/immutable/chunks/Dj3WCWGW.js", "_app/immutable/chunks/COTeNld2.js", "_app/immutable/chunks/BKg0ivWU.js", "_app/immutable/chunks/CamM0Y98.js", "_app/immutable/chunks/C7WNTl10.js"];
    stylesheets16 = [];
    fonts16 = [];
  }
});

// .svelte-kit/output/server/entries/pages/notes/_id_/edit/_page.server.js
var page_server_exports14 = {};
__export(page_server_exports14, {
  actions: () => actions11,
  load: () => load12
});
async function load12({ params, platform }) {
  const { id } = params;
  const note = await platform.env.DB.prepare("SELECT * FROM notes WHERE id = ?").bind(id).first();
  if (!note) {
    throw error(404, "Note not found");
  }
  const { results: projects } = await platform.env.DB.prepare("SELECT id, name FROM projects").all();
  return { note, projects };
}
var actions11;
var init_page_server14 = __esm({
  ".svelte-kit/output/server/entries/pages/notes/_id_/edit/_page.server.js"() {
    init_index2();
    __name(load12, "load");
    actions11 = {
      default: /* @__PURE__ */ __name(async ({ request, params, platform }) => {
        const { id } = params;
        const formData = await request.formData();
        const project_id = formData.get("project_id");
        const title = formData.get("title");
        const content = formData.get("content");
        if (!content || !project_id) {
          return fail(400, { project_id, title, content, missing: true });
        }
        try {
          await platform.env.DB.prepare(
            "UPDATE notes SET project_id = ?, title = ?, content = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?"
          ).bind(project_id, title, content, id).run();
          throw redirect(303, `/notes/${id}`);
        } catch (err) {
          if (err.status === 303) throw err;
          console.error(err);
          return fail(500, { message: "Could not update the note." });
        }
      }, "default")
    };
  }
});

// .svelte-kit/output/server/entries/pages/notes/_id_/edit/_page.svelte.js
var page_svelte_exports15 = {};
__export(page_svelte_exports15, {
  default: () => _page15
});
function _page15($$payload, $$props) {
  let data = $$props["data"];
  let { note, projects } = data;
  const each_array = ensure_array_like(projects);
  $$payload.out += `<div class="container mx-auto p-4 max-w-lg"><h1 class="text-2xl font-bold mb-4">Edit Note</h1> <form method="POST" class="space-y-4"><div><label for="project_id" class="block text-sm font-medium text-gray-700">Project</label> <select name="project_id" id="project_id" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let project = each_array[$$index];
    $$payload.out += `<option${attr("value", project.id)}${maybe_selected($$payload, project.id)}${attr("selected", project.id === note.project_id, true)}>${escape_html(project.name)}</option>`;
  }
  $$payload.out += `<!--]--></select></div> <div><label for="title" class="block text-sm font-medium text-gray-700">Title</label> <input type="text" id="title" name="title"${attr("value", note.title)} class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/></div> <div><label for="content" class="block text-sm font-medium text-gray-700">Content</label> <textarea id="content" name="content" rows="10" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">`;
  const $$body = escape_html(note.content);
  if ($$body) {
    $$payload.out += `${$$body}`;
  }
  $$payload.out += `</textarea></div> <div class="flex justify-end space-x-2"><a${attr("href", `/notes/${stringify(note.id)}`)} class="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">Cancel</a> <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Update Note</button></div></form></div>`;
  bind_props($$props, { data });
}
var init_page_svelte15 = __esm({
  ".svelte-kit/output/server/entries/pages/notes/_id_/edit/_page.svelte.js"() {
    init_chunks();
    init_client();
    __name(_page15, "_page");
  }
});

// .svelte-kit/output/server/nodes/16.js
var __exports17 = {};
__export(__exports17, {
  component: () => component17,
  fonts: () => fonts17,
  imports: () => imports17,
  index: () => index17,
  server: () => page_server_exports14,
  server_id: () => server_id14,
  stylesheets: () => stylesheets17
});
var index17, component_cache17, component17, server_id14, imports17, stylesheets17, fonts17;
var init__17 = __esm({
  ".svelte-kit/output/server/nodes/16.js"() {
    init_page_server14();
    index17 = 16;
    component17 = /* @__PURE__ */ __name(async () => component_cache17 ??= (await Promise.resolve().then(() => (init_page_svelte15(), page_svelte_exports15))).default, "component");
    server_id14 = "src/routes/notes/[id]/edit/+page.server.js";
    imports17 = ["_app/immutable/nodes/16._RP8_hzQ.js", "_app/immutable/chunks/CWj6FrbW.js", "_app/immutable/chunks/69_IOA4Y.js", "_app/immutable/chunks/DIeogL5L.js", "_app/immutable/chunks/D_AdGWyy.js", "_app/immutable/chunks/CxhRu3wT.js", "_app/immutable/chunks/BMlzsybF.js", "_app/immutable/chunks/C2Bgqaw1.js", "_app/immutable/chunks/xeqJHUo9.js", "_app/immutable/chunks/ClAlbAGz.js", "_app/immutable/chunks/C7WNTl10.js", "_app/immutable/chunks/6lfPsB8W.js", "_app/immutable/chunks/Dj3WCWGW.js", "_app/immutable/chunks/BKg0ivWU.js", "_app/immutable/chunks/CamM0Y98.js"];
    stylesheets17 = [];
    fonts17 = [];
  }
});

// .svelte-kit/output/server/entries/pages/notes/new/_page.server.js
var page_server_exports15 = {};
__export(page_server_exports15, {
  actions: () => actions12,
  load: () => load13
});
async function load13({ platform }) {
  const { results } = await platform.env.DB.prepare("SELECT id, name FROM projects").all();
  return { projects: results };
}
var actions12;
var init_page_server15 = __esm({
  ".svelte-kit/output/server/entries/pages/notes/new/_page.server.js"() {
    init_index2();
    __name(load13, "load");
    actions12 = {
      default: /* @__PURE__ */ __name(async ({ request, platform }) => {
        const formData = await request.formData();
        const project_id = formData.get("project_id");
        const title = formData.get("title");
        const content = formData.get("content");
        if (!content || !project_id) {
          return fail(400, { project_id, title, content, missing: true });
        }
        try {
          await platform.env.DB.prepare(
            "INSERT INTO notes (project_id, title, content, updated_at) VALUES (?, ?, ?, CURRENT_TIMESTAMP)"
          ).bind(project_id, title, content).run();
          throw redirect(303, `/notes`);
        } catch (error2) {
          if (error2.status === 303) throw error2;
          console.error(error2);
          return fail(500, { message: "Could not create the note." });
        }
      }, "default")
    };
  }
});

// .svelte-kit/output/server/entries/pages/notes/new/_page.svelte.js
var page_svelte_exports16 = {};
__export(page_svelte_exports16, {
  default: () => _page16
});
function _page16($$payload, $$props) {
  push();
  let data = $$props["data"];
  const each_array = ensure_array_like(data.projects);
  $$payload.out += `<div class="container mx-auto p-4 max-w-lg"><h1 class="text-2xl font-bold mb-4">New Note</h1> <form method="POST" class="space-y-4"><div><label for="project_id" class="block text-sm font-medium text-gray-700">Project</label> <select name="project_id" id="project_id" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let project = each_array[$$index];
    $$payload.out += `<option${attr("value", project.id)}${maybe_selected($$payload, project.id)}>${escape_html(project.name)}</option>`;
  }
  $$payload.out += `<!--]--></select></div> <div><label for="title" class="block text-sm font-medium text-gray-700">Title</label> <input type="text" id="title" name="title" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/></div> <div><label for="content" class="block text-sm font-medium text-gray-700">Content</label> <textarea id="content" name="content" rows="10" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea></div> <div class="flex justify-end space-x-2"><a href="/notes" class="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">Cancel</a> <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Create Note</button></div></form></div>`;
  bind_props($$props, { data });
  pop();
}
var init_page_svelte16 = __esm({
  ".svelte-kit/output/server/entries/pages/notes/new/_page.svelte.js"() {
    init_chunks();
    init_client();
    __name(_page16, "_page");
  }
});

// .svelte-kit/output/server/nodes/17.js
var __exports18 = {};
__export(__exports18, {
  component: () => component18,
  fonts: () => fonts18,
  imports: () => imports18,
  index: () => index18,
  server: () => page_server_exports15,
  server_id: () => server_id15,
  stylesheets: () => stylesheets18
});
var index18, component_cache18, component18, server_id15, imports18, stylesheets18, fonts18;
var init__18 = __esm({
  ".svelte-kit/output/server/nodes/17.js"() {
    init_page_server15();
    index18 = 17;
    component18 = /* @__PURE__ */ __name(async () => component_cache18 ??= (await Promise.resolve().then(() => (init_page_svelte16(), page_svelte_exports16))).default, "component");
    server_id15 = "src/routes/notes/new/+page.server.js";
    imports18 = ["_app/immutable/nodes/17.BkjXn7UN.js", "_app/immutable/chunks/CWj6FrbW.js", "_app/immutable/chunks/69_IOA4Y.js", "_app/immutable/chunks/DIeogL5L.js", "_app/immutable/chunks/D_AdGWyy.js", "_app/immutable/chunks/CxhRu3wT.js", "_app/immutable/chunks/BMlzsybF.js", "_app/immutable/chunks/C2Bgqaw1.js", "_app/immutable/chunks/xeqJHUo9.js", "_app/immutable/chunks/ClAlbAGz.js", "_app/immutable/chunks/C7WNTl10.js", "_app/immutable/chunks/6lfPsB8W.js", "_app/immutable/chunks/COTeNld2.js", "_app/immutable/chunks/BKg0ivWU.js", "_app/immutable/chunks/CamM0Y98.js"];
    stylesheets18 = [];
    fonts18 = [];
  }
});

// .svelte-kit/output/server/entries/pages/projects/_page.server.js
var page_server_exports16 = {};
__export(page_server_exports16, {
  actions: () => actions13,
  load: () => load14
});
async function load14({ platform }) {
  const { results } = await platform.env.DB.prepare(
    "SELECT * FROM projects"
  ).all();
  return { projects: results };
}
var actions13;
var init_page_server16 = __esm({
  ".svelte-kit/output/server/entries/pages/projects/_page.server.js"() {
    init_index2();
    __name(load14, "load");
    actions13 = {
      delete: /* @__PURE__ */ __name(async ({ request, platform }) => {
        const formData = await request.formData();
        const id = formData.get("id");
        if (!id) {
          return fail(400, { message: "Project ID is required" });
        }
        try {
          await platform.env.DB.prepare(
            "DELETE FROM projects WHERE id = ?"
          ).bind(id).run();
          return { success: true };
        } catch (error2) {
          console.error(error2);
          return fail(500, { message: "Failed to delete project" });
        }
      }, "delete")
    };
  }
});

// .svelte-kit/output/server/entries/pages/projects/_page.svelte.js
var page_svelte_exports17 = {};
__export(page_svelte_exports17, {
  default: () => _page17
});
function _page17($$payload, $$props) {
  push();
  let data = $$props["data"];
  const each_array = ensure_array_like(data.projects);
  $$payload.out += `<div class="container mx-auto p-4"><div class="flex justify-between items-center mb-4"><h1 class="text-2xl font-bold">Projects</h1> <a href="/projects/new" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">New Project</a></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let project = each_array[$$index];
    $$payload.out += `<div class="border p-4 rounded-lg shadow-sm"><h2 class="text-xl font-semibold"${attr_style(`color: ${stringify(project.color)}`)}>${escape_html(project.name)}</h2> <p class="text-gray-600 mb-4">${escape_html(project.description)}</p> <div class="flex justify-end space-x-2"><a${attr("href", `/projects/${stringify(project.id)}`)} class="text-blue-500 hover:underline">View</a> <a${attr("href", `/projects/${stringify(project.id)}/edit`)} class="text-yellow-500 hover:underline">Edit</a> <form method="POST" action="?/delete"><input type="hidden" name="id"${attr("value", project.id)}/> <button type="submit" class="text-red-500 hover:underline">Delete</button></form></div></div>`;
  }
  $$payload.out += `<!--]--></div></div>`;
  bind_props($$props, { data });
  pop();
}
var init_page_svelte17 = __esm({
  ".svelte-kit/output/server/entries/pages/projects/_page.svelte.js"() {
    init_chunks();
    init_client();
    __name(_page17, "_page");
  }
});

// .svelte-kit/output/server/nodes/18.js
var __exports19 = {};
__export(__exports19, {
  component: () => component19,
  fonts: () => fonts19,
  imports: () => imports19,
  index: () => index19,
  server: () => page_server_exports16,
  server_id: () => server_id16,
  stylesheets: () => stylesheets19
});
var index19, component_cache19, component19, server_id16, imports19, stylesheets19, fonts19;
var init__19 = __esm({
  ".svelte-kit/output/server/nodes/18.js"() {
    init_page_server16();
    index19 = 18;
    component19 = /* @__PURE__ */ __name(async () => component_cache19 ??= (await Promise.resolve().then(() => (init_page_svelte17(), page_svelte_exports17))).default, "component");
    server_id16 = "src/routes/projects/+page.server.js";
    imports19 = ["_app/immutable/nodes/18.BrZXsM9J.js", "_app/immutable/chunks/CWj6FrbW.js", "_app/immutable/chunks/69_IOA4Y.js", "_app/immutable/chunks/DIeogL5L.js", "_app/immutable/chunks/D_AdGWyy.js", "_app/immutable/chunks/CxhRu3wT.js", "_app/immutable/chunks/BMlzsybF.js", "_app/immutable/chunks/C2Bgqaw1.js", "_app/immutable/chunks/xeqJHUo9.js", "_app/immutable/chunks/ClAlbAGz.js", "_app/immutable/chunks/C7WNTl10.js", "_app/immutable/chunks/6lfPsB8W.js", "_app/immutable/chunks/Dj3WCWGW.js", "_app/immutable/chunks/BXHKhApR.js", "_app/immutable/chunks/DkPbIObf.js", "_app/immutable/chunks/COTeNld2.js", "_app/immutable/chunks/BKg0ivWU.js", "_app/immutable/chunks/CamM0Y98.js"];
    stylesheets19 = [];
    fonts19 = [];
  }
});

// .svelte-kit/output/server/entries/pages/projects/_id_/_page.server.js
var page_server_exports17 = {};
__export(page_server_exports17, {
  load: () => load15
});
async function load15({ params, platform }) {
  const { id } = params;
  const project = await platform.env.DB.prepare(
    "SELECT * FROM projects WHERE id = ?"
  ).bind(id).first();
  if (!project) {
    throw error(404, "Project not found");
  }
  return { project };
}
var init_page_server17 = __esm({
  ".svelte-kit/output/server/entries/pages/projects/_id_/_page.server.js"() {
    init_index2();
    __name(load15, "load");
  }
});

// .svelte-kit/output/server/entries/pages/projects/_id_/_page.svelte.js
var page_svelte_exports18 = {};
__export(page_svelte_exports18, {
  default: () => _page18
});
function _page18($$payload, $$props) {
  push();
  let data = $$props["data"];
  const { project } = data;
  $$payload.out += `<div class="container mx-auto p-4"><div class="mb-4"><a href="/projects" class="text-blue-500 hover:underline">\u2190 Back to Projects</a></div> <div class="border p-4 rounded-lg shadow-sm"><h1 class="text-3xl font-bold mb-2"${attr_style(`color: ${stringify(project.color)}`)}>${escape_html(project.name)}</h1> <p class="text-gray-700 mb-4">${escape_html(project.description)}</p> <div class="text-sm text-gray-500"><p>Created: ${escape_html(new Date(project.created_at).toLocaleDateString())}</p> <p>Last Updated: ${escape_html(new Date(project.updated_at).toLocaleDateString())}</p></div> <div class="flex justify-end mt-4"><a${attr("href", `/projects/${stringify(project.id)}/edit`)} class="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">Edit Project</a></div></div></div>`;
  bind_props($$props, { data });
  pop();
}
var init_page_svelte18 = __esm({
  ".svelte-kit/output/server/entries/pages/projects/_id_/_page.svelte.js"() {
    init_chunks();
    __name(_page18, "_page");
  }
});

// .svelte-kit/output/server/nodes/19.js
var __exports20 = {};
__export(__exports20, {
  component: () => component20,
  fonts: () => fonts20,
  imports: () => imports20,
  index: () => index20,
  server: () => page_server_exports17,
  server_id: () => server_id17,
  stylesheets: () => stylesheets20
});
var index20, component_cache20, component20, server_id17, imports20, stylesheets20, fonts20;
var init__20 = __esm({
  ".svelte-kit/output/server/nodes/19.js"() {
    init_page_server17();
    index20 = 19;
    component20 = /* @__PURE__ */ __name(async () => component_cache20 ??= (await Promise.resolve().then(() => (init_page_svelte18(), page_svelte_exports18))).default, "component");
    server_id17 = "src/routes/projects/[id]/+page.server.js";
    imports20 = ["_app/immutable/nodes/19.CY-zm1t2.js", "_app/immutable/chunks/CWj6FrbW.js", "_app/immutable/chunks/69_IOA4Y.js", "_app/immutable/chunks/DIeogL5L.js", "_app/immutable/chunks/D_AdGWyy.js", "_app/immutable/chunks/CxhRu3wT.js", "_app/immutable/chunks/BMlzsybF.js", "_app/immutable/chunks/Dj3WCWGW.js", "_app/immutable/chunks/BXHKhApR.js", "_app/immutable/chunks/DkPbIObf.js", "_app/immutable/chunks/COTeNld2.js", "_app/immutable/chunks/BKg0ivWU.js", "_app/immutable/chunks/CamM0Y98.js", "_app/immutable/chunks/C7WNTl10.js"];
    stylesheets20 = [];
    fonts20 = [];
  }
});

// .svelte-kit/output/server/entries/pages/projects/_id_/edit/_page.server.js
var page_server_exports18 = {};
__export(page_server_exports18, {
  actions: () => actions14,
  load: () => load16
});
async function load16({ params, platform }) {
  const { id } = params;
  const project = await platform.env.DB.prepare(
    "SELECT * FROM projects WHERE id = ?"
  ).bind(id).first();
  if (!project) {
    throw error(404, "Project not found");
  }
  return { project };
}
var actions14;
var init_page_server18 = __esm({
  ".svelte-kit/output/server/entries/pages/projects/_id_/edit/_page.server.js"() {
    init_index2();
    __name(load16, "load");
    actions14 = {
      default: /* @__PURE__ */ __name(async ({ request, params, platform }) => {
        const { id } = params;
        const formData = await request.formData();
        const name = formData.get("name");
        const description = formData.get("description");
        const color = formData.get("color");
        if (!name) {
          return fail(400, { name, description, color, missing: true });
        }
        try {
          await platform.env.DB.prepare(
            "UPDATE projects SET name = ?, description = ?, color = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?"
          ).bind(name, description, color, id).run();
          throw redirect(303, `/projects/${id}`);
        } catch (err) {
          console.error(err);
          if (err.status === 303) throw err;
          return fail(500, { message: "Could not update the project." });
        }
      }, "default")
    };
  }
});

// .svelte-kit/output/server/entries/pages/projects/_id_/edit/_page.svelte.js
var page_svelte_exports19 = {};
__export(page_svelte_exports19, {
  default: () => _page19
});
function _page19($$payload, $$props) {
  let data = $$props["data"];
  let { project } = data;
  $$payload.out += `<div class="container mx-auto p-4 max-w-lg"><h1 class="text-2xl font-bold mb-4">Edit Project</h1> <form method="POST" class="space-y-4"><div><label for="name" class="block text-sm font-medium text-gray-700">Name</label> <input type="text" id="name" name="name"${attr("value", project.name)} required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/></div> <div><label for="description" class="block text-sm font-medium text-gray-700">Description</label> <textarea id="description" name="description" rows="3" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">`;
  const $$body = escape_html(project.description);
  if ($$body) {
    $$payload.out += `${$$body}`;
  }
  $$payload.out += `</textarea></div> <div><label for="color" class="block text-sm font-medium text-gray-700">Color</label> <input type="color" id="color" name="color"${attr("value", project.color)} class="mt-1 block w-full h-10 px-1 border border-gray-300 rounded-md shadow-sm"/></div> <div class="flex justify-end space-x-2"><a${attr("href", `/projects/${stringify(project.id)}`)} class="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">Cancel</a> <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Update Project</button></div></form></div>`;
  bind_props($$props, { data });
}
var init_page_svelte19 = __esm({
  ".svelte-kit/output/server/entries/pages/projects/_id_/edit/_page.svelte.js"() {
    init_chunks();
    init_client();
    __name(_page19, "_page");
  }
});

// .svelte-kit/output/server/nodes/20.js
var __exports21 = {};
__export(__exports21, {
  component: () => component21,
  fonts: () => fonts21,
  imports: () => imports21,
  index: () => index21,
  server: () => page_server_exports18,
  server_id: () => server_id18,
  stylesheets: () => stylesheets21
});
var index21, component_cache21, component21, server_id18, imports21, stylesheets21, fonts21;
var init__21 = __esm({
  ".svelte-kit/output/server/nodes/20.js"() {
    init_page_server18();
    index21 = 20;
    component21 = /* @__PURE__ */ __name(async () => component_cache21 ??= (await Promise.resolve().then(() => (init_page_svelte19(), page_svelte_exports19))).default, "component");
    server_id18 = "src/routes/projects/[id]/edit/+page.server.js";
    imports21 = ["_app/immutable/nodes/20.CCMb05Dz.js", "_app/immutable/chunks/CWj6FrbW.js", "_app/immutable/chunks/69_IOA4Y.js", "_app/immutable/chunks/DIeogL5L.js", "_app/immutable/chunks/D_AdGWyy.js", "_app/immutable/chunks/Dj3WCWGW.js", "_app/immutable/chunks/BMlzsybF.js", "_app/immutable/chunks/xeqJHUo9.js", "_app/immutable/chunks/ClAlbAGz.js", "_app/immutable/chunks/C7WNTl10.js", "_app/immutable/chunks/6lfPsB8W.js", "_app/immutable/chunks/BKg0ivWU.js", "_app/immutable/chunks/CamM0Y98.js"];
    stylesheets21 = [];
    fonts21 = [];
  }
});

// .svelte-kit/output/server/entries/pages/projects/new/_page.server.js
var page_server_exports19 = {};
__export(page_server_exports19, {
  actions: () => actions15
});
var actions15;
var init_page_server19 = __esm({
  ".svelte-kit/output/server/entries/pages/projects/new/_page.server.js"() {
    init_index2();
    actions15 = {
      default: /* @__PURE__ */ __name(async ({ request, platform }) => {
        const formData = await request.formData();
        const name = formData.get("name");
        const description = formData.get("description");
        const color = formData.get("color");
        if (!name) {
          return fail(400, { name, description, color, missing: true });
        }
        try {
          const { results } = await platform.env.DB.prepare(
            "INSERT INTO projects (name, description, color) VALUES (?, ?, ?) RETURNING id"
          ).bind(name, description, color).run();
          const newProjectId = results[0]?.id;
          if (newProjectId) {
            throw redirect(303, `/projects/${newProjectId}`);
          } else {
            throw redirect(303, "/projects");
          }
        } catch (error2) {
          console.error(error2);
          return fail(500, { message: "Could not create the project." });
        }
      }, "default")
    };
  }
});

// .svelte-kit/output/server/entries/pages/projects/new/_page.svelte.js
var page_svelte_exports20 = {};
__export(page_svelte_exports20, {
  default: () => _page20
});
function _page20($$payload) {
  $$payload.out += `<div class="container mx-auto p-4 max-w-lg"><h1 class="text-2xl font-bold mb-4">New Project</h1> <form method="POST" class="space-y-4"><div><label for="name" class="block text-sm font-medium text-gray-700">Name</label> <input type="text" id="name" name="name" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/></div> <div><label for="description" class="block text-sm font-medium text-gray-700">Description</label> <textarea id="description" name="description" rows="3" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea></div> <div><label for="color" class="block text-sm font-medium text-gray-700">Color</label> <input type="color" id="color" name="color" value="#16A349" class="mt-1 block w-full h-10 px-1 border border-gray-300 rounded-md shadow-sm"/></div> <div class="flex justify-end space-x-2"><a href="/projects" class="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">Cancel</a> <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Create Project</button></div></form></div>`;
}
var init_page_svelte20 = __esm({
  ".svelte-kit/output/server/entries/pages/projects/new/_page.svelte.js"() {
    init_clsx();
    init_client();
    __name(_page20, "_page");
  }
});

// .svelte-kit/output/server/nodes/21.js
var __exports22 = {};
__export(__exports22, {
  component: () => component22,
  fonts: () => fonts22,
  imports: () => imports22,
  index: () => index22,
  server: () => page_server_exports19,
  server_id: () => server_id19,
  stylesheets: () => stylesheets22
});
var index22, component_cache22, component22, server_id19, imports22, stylesheets22, fonts22;
var init__22 = __esm({
  ".svelte-kit/output/server/nodes/21.js"() {
    init_page_server19();
    index22 = 21;
    component22 = /* @__PURE__ */ __name(async () => component_cache22 ??= (await Promise.resolve().then(() => (init_page_svelte20(), page_svelte_exports20))).default, "component");
    server_id19 = "src/routes/projects/new/+page.server.js";
    imports22 = ["_app/immutable/nodes/21.CnIvYPFV.js", "_app/immutable/chunks/CWj6FrbW.js", "_app/immutable/chunks/69_IOA4Y.js", "_app/immutable/chunks/DIeogL5L.js", "_app/immutable/chunks/D_AdGWyy.js", "_app/immutable/chunks/BMlzsybF.js", "_app/immutable/chunks/xeqJHUo9.js", "_app/immutable/chunks/ClAlbAGz.js", "_app/immutable/chunks/C7WNTl10.js", "_app/immutable/chunks/6lfPsB8W.js"];
    stylesheets22 = [];
    fonts22 = [];
  }
});

// .svelte-kit/output/server/entries/pages/resources/_page.server.js
var page_server_exports20 = {};
__export(page_server_exports20, {
  actions: () => actions16,
  load: () => load17
});
async function load17({ platform }) {
  const { results } = await platform.env.DB.prepare(
    `SELECT resources.*, projects.name as project_name 
     FROM resources 
     JOIN projects ON resources.project_id = projects.id 
     ORDER BY created_at DESC`
  ).all();
  return { resources: results };
}
var actions16;
var init_page_server20 = __esm({
  ".svelte-kit/output/server/entries/pages/resources/_page.server.js"() {
    init_index2();
    __name(load17, "load");
    actions16 = {
      delete: /* @__PURE__ */ __name(async ({ request, platform }) => {
        const id = (await request.formData()).get("id");
        try {
          await platform.env.DB.prepare("DELETE FROM resources WHERE id = ?").bind(id).run();
          return { success: true };
        } catch (error2) {
          return fail(500, { message: "Failed to delete resource" });
        }
      }, "delete")
    };
  }
});

// .svelte-kit/output/server/entries/pages/resources/_page.svelte.js
var page_svelte_exports21 = {};
__export(page_svelte_exports21, {
  default: () => _page21
});
function _page21($$payload, $$props) {
  push();
  let data = $$props["data"];
  const each_array = ensure_array_like(data.resources);
  $$payload.out += `<div class="container mx-auto p-4"><div class="flex justify-between items-center mb-4"><h1 class="text-2xl font-bold">Resources</h1> <a href="/resources/new" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">New Resource</a></div> <div class="space-y-4"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let resource = each_array[$$index];
    $$payload.out += `<div class="border p-4 rounded-lg shadow-sm flex justify-between items-start"><div><a${attr("href", resource.url)} target="_blank" rel="noopener noreferrer" class="text-xl font-semibold text-blue-600 hover:underline">${escape_html(resource.label)}</a> <p class="text-gray-600">${escape_html(resource.description)}</p> <p class="text-sm text-gray-500">Project: ${escape_html(resource.project_name)}</p></div> <div class="flex items-center space-x-3"><a${attr("href", `/resources/${stringify(resource.id)}/edit`)} class="text-yellow-500 hover:underline">Edit</a> <form method="POST" action="?/delete"><input type="hidden" name="id"${attr("value", resource.id)}/> <button type="submit" class="text-red-500 hover:underline">Delete</button></form></div></div>`;
  }
  $$payload.out += `<!--]--></div></div>`;
  bind_props($$props, { data });
  pop();
}
var init_page_svelte21 = __esm({
  ".svelte-kit/output/server/entries/pages/resources/_page.svelte.js"() {
    init_chunks();
    init_client();
    __name(_page21, "_page");
  }
});

// .svelte-kit/output/server/nodes/22.js
var __exports23 = {};
__export(__exports23, {
  component: () => component23,
  fonts: () => fonts23,
  imports: () => imports23,
  index: () => index23,
  server: () => page_server_exports20,
  server_id: () => server_id20,
  stylesheets: () => stylesheets23
});
var index23, component_cache23, component23, server_id20, imports23, stylesheets23, fonts23;
var init__23 = __esm({
  ".svelte-kit/output/server/nodes/22.js"() {
    init_page_server20();
    index23 = 22;
    component23 = /* @__PURE__ */ __name(async () => component_cache23 ??= (await Promise.resolve().then(() => (init_page_svelte21(), page_svelte_exports21))).default, "component");
    server_id20 = "src/routes/resources/+page.server.js";
    imports23 = ["_app/immutable/nodes/22.CdTaE_Nj.js", "_app/immutable/chunks/CWj6FrbW.js", "_app/immutable/chunks/69_IOA4Y.js", "_app/immutable/chunks/DIeogL5L.js", "_app/immutable/chunks/D_AdGWyy.js", "_app/immutable/chunks/CxhRu3wT.js", "_app/immutable/chunks/BMlzsybF.js", "_app/immutable/chunks/C2Bgqaw1.js", "_app/immutable/chunks/xeqJHUo9.js", "_app/immutable/chunks/ClAlbAGz.js", "_app/immutable/chunks/C7WNTl10.js", "_app/immutable/chunks/6lfPsB8W.js", "_app/immutable/chunks/Dj3WCWGW.js", "_app/immutable/chunks/COTeNld2.js", "_app/immutable/chunks/BKg0ivWU.js", "_app/immutable/chunks/CamM0Y98.js"];
    stylesheets23 = [];
    fonts23 = [];
  }
});

// .svelte-kit/output/server/entries/pages/resources/_id_/_page.server.js
var page_server_exports21 = {};
var init_page_server21 = __esm({
  ".svelte-kit/output/server/entries/pages/resources/_id_/_page.server.js"() {
  }
});

// .svelte-kit/output/server/entries/pages/resources/_id_/_page.svelte.js
var page_svelte_exports22 = {};
__export(page_svelte_exports22, {
  default: () => _page22
});
function _page22($$payload) {
}
var init_page_svelte22 = __esm({
  ".svelte-kit/output/server/entries/pages/resources/_id_/_page.svelte.js"() {
    init_clsx();
    __name(_page22, "_page");
  }
});

// .svelte-kit/output/server/nodes/23.js
var __exports24 = {};
__export(__exports24, {
  component: () => component24,
  fonts: () => fonts24,
  imports: () => imports24,
  index: () => index24,
  server: () => page_server_exports21,
  server_id: () => server_id21,
  stylesheets: () => stylesheets24
});
var index24, component_cache24, component24, server_id21, imports24, stylesheets24, fonts24;
var init__24 = __esm({
  ".svelte-kit/output/server/nodes/23.js"() {
    init_page_server21();
    index24 = 23;
    component24 = /* @__PURE__ */ __name(async () => component_cache24 ??= (await Promise.resolve().then(() => (init_page_svelte22(), page_svelte_exports22))).default, "component");
    server_id21 = "src/routes/resources/[id]/+page.server.js";
    imports24 = ["_app/immutable/nodes/23.CWG1ehzT.js", "_app/immutable/chunks/CWj6FrbW.js", "_app/immutable/chunks/69_IOA4Y.js", "_app/immutable/chunks/DIeogL5L.js"];
    stylesheets24 = [];
    fonts24 = [];
  }
});

// .svelte-kit/output/server/entries/pages/resources/_id_/edit/_page.server.js
var page_server_exports22 = {};
__export(page_server_exports22, {
  actions: () => actions17,
  load: () => load18
});
async function load18({ params, platform }) {
  const resource = await platform.env.DB.prepare("SELECT * FROM resources WHERE id = ?").bind(params.id).first();
  if (!resource) throw error(404, "Resource not found");
  const { results: projects } = await platform.env.DB.prepare("SELECT id, name FROM projects").all();
  return { resource, projects };
}
var actions17;
var init_page_server22 = __esm({
  ".svelte-kit/output/server/entries/pages/resources/_id_/edit/_page.server.js"() {
    init_index2();
    __name(load18, "load");
    actions17 = {
      default: /* @__PURE__ */ __name(async ({ request, params, platform }) => {
        const formData = await request.formData();
        const data = Object.fromEntries(formData);
        try {
          await platform.env.DB.prepare(
            `UPDATE resources SET project_id = ?, label = ?, url = ?, description = ? WHERE id = ?`
          ).bind(data.project_id, data.label, data.url, data.description, params.id).run();
          throw redirect(303, `/resources`);
        } catch (err) {
          if (err.status === 303) throw err;
          return fail(500, { message: "Could not update resource." });
        }
      }, "default")
    };
  }
});

// .svelte-kit/output/server/entries/pages/resources/_id_/edit/_page.svelte.js
var page_svelte_exports23 = {};
__export(page_svelte_exports23, {
  default: () => _page23
});
function _page23($$payload, $$props) {
  let data = $$props["data"];
  let { resource, projects } = data;
  const each_array = ensure_array_like(projects);
  $$payload.out += `<div class="container mx-auto p-4 max-w-lg"><h1 class="text-2xl font-bold mb-4">Edit Resource</h1> <form method="POST" class="space-y-4"><div><label for="project_id" class="block text-sm font-medium">Project</label> <select name="project_id" required class="mt-1 block w-full px-3 py-2 border rounded-md"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let project = each_array[$$index];
    $$payload.out += `<option${attr("value", project.id)}${maybe_selected($$payload, project.id)}${attr("selected", project.id === resource.project_id, true)}>${escape_html(project.name)}</option>`;
  }
  $$payload.out += `<!--]--></select></div> <div><label for="label" class="block text-sm font-medium">Label</label> <input type="text" name="label"${attr("value", resource.label)} required class="mt-1 block w-full px-3 py-2 border rounded-md"/></div> <div><label for="url" class="block text-sm font-medium">URL</label> <input type="url" name="url"${attr("value", resource.url)} placeholder="https://..." class="mt-1 block w-full px-3 py-2 border rounded-md"/></div> <div><label for="description" class="block text-sm font-medium">Description</label> <textarea name="description" rows="3" class="mt-1 block w-full px-3 py-2 border rounded-md">`;
  const $$body = escape_html(resource.description);
  if ($$body) {
    $$payload.out += `${$$body}`;
  }
  $$payload.out += `</textarea></div> <div class="flex justify-end space-x-2"><a href="/resources" class="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">Cancel</a> <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">Update Resource</button></div></form></div>`;
  bind_props($$props, { data });
}
var init_page_svelte23 = __esm({
  ".svelte-kit/output/server/entries/pages/resources/_id_/edit/_page.svelte.js"() {
    init_chunks();
    init_client();
    __name(_page23, "_page");
  }
});

// .svelte-kit/output/server/nodes/24.js
var __exports25 = {};
__export(__exports25, {
  component: () => component25,
  fonts: () => fonts25,
  imports: () => imports25,
  index: () => index25,
  server: () => page_server_exports22,
  server_id: () => server_id22,
  stylesheets: () => stylesheets25
});
var index25, component_cache25, component25, server_id22, imports25, stylesheets25, fonts25;
var init__25 = __esm({
  ".svelte-kit/output/server/nodes/24.js"() {
    init_page_server22();
    index25 = 24;
    component25 = /* @__PURE__ */ __name(async () => component_cache25 ??= (await Promise.resolve().then(() => (init_page_svelte23(), page_svelte_exports23))).default, "component");
    server_id22 = "src/routes/resources/[id]/edit/+page.server.js";
    imports25 = ["_app/immutable/nodes/24.Bsp7YL45.js", "_app/immutable/chunks/CWj6FrbW.js", "_app/immutable/chunks/69_IOA4Y.js", "_app/immutable/chunks/DIeogL5L.js", "_app/immutable/chunks/D_AdGWyy.js", "_app/immutable/chunks/CxhRu3wT.js", "_app/immutable/chunks/BMlzsybF.js", "_app/immutable/chunks/C2Bgqaw1.js", "_app/immutable/chunks/xeqJHUo9.js", "_app/immutable/chunks/ClAlbAGz.js", "_app/immutable/chunks/C7WNTl10.js", "_app/immutable/chunks/6lfPsB8W.js", "_app/immutable/chunks/Dj3WCWGW.js", "_app/immutable/chunks/BKg0ivWU.js", "_app/immutable/chunks/CamM0Y98.js"];
    stylesheets25 = [];
    fonts25 = [];
  }
});

// .svelte-kit/output/server/entries/pages/resources/new/_page.server.js
var page_server_exports23 = {};
__export(page_server_exports23, {
  actions: () => actions18,
  load: () => load19
});
async function load19({ platform }) {
  const { results } = await platform.env.DB.prepare("SELECT id, name FROM projects").all();
  return { projects: results };
}
var actions18;
var init_page_server23 = __esm({
  ".svelte-kit/output/server/entries/pages/resources/new/_page.server.js"() {
    init_index2();
    __name(load19, "load");
    actions18 = {
      default: /* @__PURE__ */ __name(async ({ request, platform }) => {
        const formData = await request.formData();
        const data = Object.fromEntries(formData);
        if (!data.label || !data.project_id) {
          return fail(400, { data, missing: true });
        }
        try {
          await platform.env.DB.prepare(
            "INSERT INTO resources (project_id, label, url, description) VALUES (?, ?, ?, ?)"
          ).bind(data.project_id, data.label, data.url, data.description).run();
          throw redirect(303, `/resources`);
        } catch (error2) {
          if (error2.status === 303) throw error2;
          return fail(500, { message: "Could not create the resource." });
        }
      }, "default")
    };
  }
});

// .svelte-kit/output/server/entries/pages/resources/new/_page.svelte.js
var page_svelte_exports24 = {};
__export(page_svelte_exports24, {
  default: () => _page24
});
function _page24($$payload, $$props) {
  push();
  let data = $$props["data"];
  const each_array = ensure_array_like(data.projects);
  $$payload.out += `<div class="container mx-auto p-4 max-w-lg"><h1 class="text-2xl font-bold mb-4">New Resource</h1> <form method="POST" class="space-y-4"><div><label for="project_id" class="block text-sm font-medium">Project</label> <select name="project_id" required class="mt-1 block w-full px-3 py-2 border rounded-md"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let project = each_array[$$index];
    $$payload.out += `<option${attr("value", project.id)}${maybe_selected($$payload, project.id)}>${escape_html(project.name)}</option>`;
  }
  $$payload.out += `<!--]--></select></div> <div><label for="label" class="block text-sm font-medium">Label</label> <input type="text" name="label" required class="mt-1 block w-full px-3 py-2 border rounded-md"/></div> <div><label for="url" class="block text-sm font-medium">URL</label> <input type="url" name="url" placeholder="https://..." class="mt-1 block w-full px-3 py-2 border rounded-md"/></div> <div><label for="description" class="block text-sm font-medium">Description</label> <textarea name="description" rows="3" class="mt-1 block w-full px-3 py-2 border rounded-md"></textarea></div> <div class="flex justify-end space-x-2"><a href="/resources" class="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">Cancel</a> <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">Create Resource</button></div></form></div>`;
  bind_props($$props, { data });
  pop();
}
var init_page_svelte24 = __esm({
  ".svelte-kit/output/server/entries/pages/resources/new/_page.svelte.js"() {
    init_chunks();
    init_client();
    __name(_page24, "_page");
  }
});

// .svelte-kit/output/server/nodes/25.js
var __exports26 = {};
__export(__exports26, {
  component: () => component26,
  fonts: () => fonts26,
  imports: () => imports26,
  index: () => index26,
  server: () => page_server_exports23,
  server_id: () => server_id23,
  stylesheets: () => stylesheets26
});
var index26, component_cache26, component26, server_id23, imports26, stylesheets26, fonts26;
var init__26 = __esm({
  ".svelte-kit/output/server/nodes/25.js"() {
    init_page_server23();
    index26 = 25;
    component26 = /* @__PURE__ */ __name(async () => component_cache26 ??= (await Promise.resolve().then(() => (init_page_svelte24(), page_svelte_exports24))).default, "component");
    server_id23 = "src/routes/resources/new/+page.server.js";
    imports26 = ["_app/immutable/nodes/25.CaLaD72y.js", "_app/immutable/chunks/CWj6FrbW.js", "_app/immutable/chunks/69_IOA4Y.js", "_app/immutable/chunks/DIeogL5L.js", "_app/immutable/chunks/D_AdGWyy.js", "_app/immutable/chunks/CxhRu3wT.js", "_app/immutable/chunks/BMlzsybF.js", "_app/immutable/chunks/C2Bgqaw1.js", "_app/immutable/chunks/xeqJHUo9.js", "_app/immutable/chunks/ClAlbAGz.js", "_app/immutable/chunks/C7WNTl10.js", "_app/immutable/chunks/6lfPsB8W.js", "_app/immutable/chunks/COTeNld2.js", "_app/immutable/chunks/BKg0ivWU.js", "_app/immutable/chunks/CamM0Y98.js"];
    stylesheets26 = [];
    fonts26 = [];
  }
});

// .svelte-kit/output/server/entries/pages/tasks/_page.server.js
var page_server_exports24 = {};
__export(page_server_exports24, {
  actions: () => actions19,
  load: () => load20
});
async function load20({ platform }) {
  const { results } = await platform.env.DB.prepare(
    "SELECT * FROM tasks"
  ).all();
  return { tasks: results };
}
var actions19;
var init_page_server24 = __esm({
  ".svelte-kit/output/server/entries/pages/tasks/_page.server.js"() {
    init_index2();
    __name(load20, "load");
    actions19 = {
      delete: /* @__PURE__ */ __name(async ({ request, platform }) => {
        const formData = await request.formData();
        const id = formData.get("id");
        try {
          await platform.env.DB.prepare("DELETE FROM tasks WHERE id = ?").bind(id).run();
          return { success: true };
        } catch (error2) {
          return fail(500, { message: "Failed to delete task" });
        }
      }, "delete")
    };
  }
});

// .svelte-kit/output/server/entries/pages/tasks/_page.svelte.js
var page_svelte_exports25 = {};
__export(page_svelte_exports25, {
  default: () => _page25
});
function _page25($$payload, $$props) {
  push();
  let data = $$props["data"];
  const each_array = ensure_array_like(data.tasks);
  $$payload.out += `<div class="container mx-auto p-4"><div class="flex justify-between items-center mb-4"><h1 class="text-2xl font-bold">Tasks</h1> <a href="/tasks/new" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">New Task</a></div> <div class="space-y-4"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let task = each_array[$$index];
    $$payload.out += `<div class="border p-4 rounded-lg shadow-sm flex justify-between items-center"><div><h2 class="text-xl font-semibold">${escape_html(task.name)}</h2> <p class="text-gray-600">${escape_html(task.description)}</p> <span${attr_class("", void 0, { "list": PRIORITY_COLORS[task.priority] })}>${escape_html(PRIORITY_LABELS[task.priority])} Priority</span></div> <div class="flex items-center space-x-2"><span class="text-sm text-gray-500">${escape_html(task.done ? "\u2705 Done" : "\u2611\uFE0F To-Do")}</span> <a${attr("href", `/tasks/${stringify(task.id)}/edit`)} class="text-yellow-500 hover:underline">Edit</a> <form method="POST" action="?/delete"><input type="hidden" name="id"${attr("value", task.id)}/> <button type="submit" class="text-red-500 hover:underline">Delete</button></form></div></div>`;
  }
  $$payload.out += `<!--]--></div></div>`;
  bind_props($$props, { data });
  pop();
}
var init_page_svelte25 = __esm({
  ".svelte-kit/output/server/entries/pages/tasks/_page.svelte.js"() {
    init_chunks();
    init_client();
    init_types();
    __name(_page25, "_page");
  }
});

// .svelte-kit/output/server/nodes/26.js
var __exports27 = {};
__export(__exports27, {
  component: () => component27,
  fonts: () => fonts27,
  imports: () => imports27,
  index: () => index27,
  server: () => page_server_exports24,
  server_id: () => server_id24,
  stylesheets: () => stylesheets27
});
var index27, component_cache27, component27, server_id24, imports27, stylesheets27, fonts27;
var init__27 = __esm({
  ".svelte-kit/output/server/nodes/26.js"() {
    init_page_server24();
    index27 = 26;
    component27 = /* @__PURE__ */ __name(async () => component_cache27 ??= (await Promise.resolve().then(() => (init_page_svelte25(), page_svelte_exports25))).default, "component");
    server_id24 = "src/routes/tasks/+page.server.js";
    imports27 = ["_app/immutable/nodes/26.Cf8xOHNC.js", "_app/immutable/chunks/CWj6FrbW.js", "_app/immutable/chunks/69_IOA4Y.js", "_app/immutable/chunks/DIeogL5L.js", "_app/immutable/chunks/D_AdGWyy.js", "_app/immutable/chunks/CxhRu3wT.js", "_app/immutable/chunks/BMlzsybF.js", "_app/immutable/chunks/C2Bgqaw1.js", "_app/immutable/chunks/xeqJHUo9.js", "_app/immutable/chunks/ClAlbAGz.js", "_app/immutable/chunks/C7WNTl10.js", "_app/immutable/chunks/6lfPsB8W.js", "_app/immutable/chunks/Dj3WCWGW.js", "_app/immutable/chunks/BNVceiNn.js", "_app/immutable/chunks/DkPbIObf.js", "_app/immutable/chunks/COTeNld2.js", "_app/immutable/chunks/BKg0ivWU.js", "_app/immutable/chunks/CamM0Y98.js", "_app/immutable/chunks/B7scx7VJ.js"];
    stylesheets27 = [];
    fonts27 = [];
  }
});

// .svelte-kit/output/server/entries/pages/tasks/_id_/_page.server.js
var page_server_exports25 = {};
var init_page_server25 = __esm({
  ".svelte-kit/output/server/entries/pages/tasks/_id_/_page.server.js"() {
  }
});

// .svelte-kit/output/server/entries/pages/tasks/_id_/_page.svelte.js
var page_svelte_exports26 = {};
__export(page_svelte_exports26, {
  default: () => _page26
});
function _page26($$payload) {
}
var init_page_svelte26 = __esm({
  ".svelte-kit/output/server/entries/pages/tasks/_id_/_page.svelte.js"() {
    init_clsx();
    __name(_page26, "_page");
  }
});

// .svelte-kit/output/server/nodes/27.js
var __exports28 = {};
__export(__exports28, {
  component: () => component28,
  fonts: () => fonts28,
  imports: () => imports28,
  index: () => index28,
  server: () => page_server_exports25,
  server_id: () => server_id25,
  stylesheets: () => stylesheets28
});
var index28, component_cache28, component28, server_id25, imports28, stylesheets28, fonts28;
var init__28 = __esm({
  ".svelte-kit/output/server/nodes/27.js"() {
    init_page_server25();
    index28 = 27;
    component28 = /* @__PURE__ */ __name(async () => component_cache28 ??= (await Promise.resolve().then(() => (init_page_svelte26(), page_svelte_exports26))).default, "component");
    server_id25 = "src/routes/tasks/[id]/+page.server.js";
    imports28 = ["_app/immutable/nodes/27.CWG1ehzT.js", "_app/immutable/chunks/CWj6FrbW.js", "_app/immutable/chunks/69_IOA4Y.js", "_app/immutable/chunks/DIeogL5L.js"];
    stylesheets28 = [];
    fonts28 = [];
  }
});

// .svelte-kit/output/server/entries/pages/tasks/_id_/edit/_page.server.js
var page_server_exports26 = {};
__export(page_server_exports26, {
  actions: () => actions20,
  load: () => load21
});
async function load21({ params, platform }) {
  const { id } = params;
  const task = await platform.env.DB.prepare("SELECT * FROM tasks WHERE id = ?").bind(id).first();
  if (!task) {
    throw error(404, "Task not found");
  }
  const { results: projects } = await platform.env.DB.prepare("SELECT id, name FROM projects").all();
  return { task, projects };
}
var actions20;
var init_page_server26 = __esm({
  ".svelte-kit/output/server/entries/pages/tasks/_id_/edit/_page.server.js"() {
    init_index2();
    __name(load21, "load");
    actions20 = {
      default: /* @__PURE__ */ __name(async ({ request, params, platform }) => {
        const { id } = params;
        const formData = await request.formData();
        const data = Object.fromEntries(formData);
        const done = formData.get("done") ? 1 : 0;
        try {
          await platform.env.DB.prepare(
            "UPDATE tasks SET project_id = ?, name = ?, description = ?, done = ?, due_date = ?, priority = ? WHERE id = ?"
          ).bind(data.project_id, data.name, data.description, done, data.due_date, data.priority, id).run();
          throw redirect(303, `/tasks`);
        } catch (err) {
          if (err.status === 303) throw err;
          return fail(500, { message: "Could not update task." });
        }
      }, "default")
    };
  }
});

// .svelte-kit/output/server/entries/pages/tasks/_id_/edit/_page.svelte.js
var page_svelte_exports27 = {};
__export(page_svelte_exports27, {
  default: () => _page27
});
function _page27($$payload, $$props) {
  push();
  let data = $$props["data"];
  let { task, projects } = data;
  const each_array = ensure_array_like(projects);
  $$payload.out += `<div class="container mx-auto p-4 max-w-lg"><h1 class="text-2xl font-bold mb-4">Edit Task</h1> <form method="POST" class="space-y-4"><div><label for="project_id">Project</label> <select name="project_id" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let project = each_array[$$index];
    $$payload.out += `<option${attr("value", project.id)}${maybe_selected($$payload, project.id)}${attr("selected", project.id === task.project_id, true)}>${escape_html(project.name)}</option>`;
  }
  $$payload.out += `<!--]--></select></div> <div><label for="name">Name</label> <input type="text" name="name"${attr("value", task.name)} required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"/></div> <div><label for="description">Description</label> <textarea name="description" rows="3" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">`;
  const $$body = escape_html(task.description);
  if ($$body) {
    $$payload.out += `${$$body}`;
  }
  $$payload.out += `</textarea></div> <div><label for="due_date">Due Date</label> <input type="date" name="due_date"${attr("value", task.due_date?.split("T")[0])} class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"/></div> <div><label for="priority">Priority</label> <select name="priority" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"><option value="0"${maybe_selected($$payload, "0")}${attr("selected", task.priority === 0, true)}>Low</option><option value="1"${maybe_selected($$payload, "1")}${attr("selected", task.priority === 1, true)}>Medium</option><option value="2"${maybe_selected($$payload, "2")}${attr("selected", task.priority === 2, true)}>High</option></select></div> <div class="flex items-center"><input type="checkbox" name="done"${attr("checked", !!task.done, true)} class="h-4 w-4 text-blue-600 border-gray-300 rounded"/> <label for="done" class="ml-2 block text-sm text-gray-900">Mark as done</label></div> <div class="flex justify-end space-x-2"><a href="/tasks" class="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">Cancel</a> <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">Update Task</button></div></form></div>`;
  bind_props($$props, { data });
  pop();
}
var init_page_svelte27 = __esm({
  ".svelte-kit/output/server/entries/pages/tasks/_id_/edit/_page.svelte.js"() {
    init_chunks();
    init_client();
    __name(_page27, "_page");
  }
});

// .svelte-kit/output/server/nodes/28.js
var __exports29 = {};
__export(__exports29, {
  component: () => component29,
  fonts: () => fonts29,
  imports: () => imports29,
  index: () => index29,
  server: () => page_server_exports26,
  server_id: () => server_id26,
  stylesheets: () => stylesheets29
});
var index29, component_cache29, component29, server_id26, imports29, stylesheets29, fonts29;
var init__29 = __esm({
  ".svelte-kit/output/server/nodes/28.js"() {
    init_page_server26();
    index29 = 28;
    component29 = /* @__PURE__ */ __name(async () => component_cache29 ??= (await Promise.resolve().then(() => (init_page_svelte27(), page_svelte_exports27))).default, "component");
    server_id26 = "src/routes/tasks/[id]/edit/+page.server.js";
    imports29 = ["_app/immutable/nodes/28.DemfDIjh.js", "_app/immutable/chunks/CWj6FrbW.js", "_app/immutable/chunks/69_IOA4Y.js", "_app/immutable/chunks/DIeogL5L.js", "_app/immutable/chunks/D_AdGWyy.js", "_app/immutable/chunks/CxhRu3wT.js", "_app/immutable/chunks/BMlzsybF.js", "_app/immutable/chunks/C2Bgqaw1.js", "_app/immutable/chunks/xeqJHUo9.js", "_app/immutable/chunks/ClAlbAGz.js", "_app/immutable/chunks/C7WNTl10.js", "_app/immutable/chunks/6lfPsB8W.js", "_app/immutable/chunks/Dj3WCWGW.js", "_app/immutable/chunks/COTeNld2.js", "_app/immutable/chunks/BKg0ivWU.js", "_app/immutable/chunks/CamM0Y98.js"];
    stylesheets29 = [];
    fonts29 = [];
  }
});

// .svelte-kit/output/server/entries/pages/tasks/new/_page.server.js
var page_server_exports27 = {};
__export(page_server_exports27, {
  actions: () => actions21,
  load: () => load22
});
async function load22({ platform }) {
  const { results } = await platform.env.DB.prepare("SELECT id, name FROM projects").all();
  return { projects: results };
}
var actions21;
var init_page_server27 = __esm({
  ".svelte-kit/output/server/entries/pages/tasks/new/_page.server.js"() {
    init_index2();
    __name(load22, "load");
    actions21 = {
      default: /* @__PURE__ */ __name(async ({ request, platform }) => {
        const formData = await request.formData();
        const data = Object.fromEntries(formData);
        if (!data.name || !data.project_id) {
          return fail(400, { data, missing: true });
        }
        try {
          await platform.env.DB.prepare(
            "INSERT INTO tasks (project_id, name, description, due_date, priority) VALUES (?, ?, ?, ?, ?)"
          ).bind(data.project_id, data.name, data.description, data.due_date, data.priority).run();
          throw redirect(303, `/tasks`);
        } catch (error2) {
          if (error2.status === 303) throw error2;
          return fail(500, { message: "Could not create the task." });
        }
      }, "default")
    };
  }
});

// .svelte-kit/output/server/entries/pages/tasks/new/_page.svelte.js
var page_svelte_exports28 = {};
__export(page_svelte_exports28, {
  default: () => _page28
});
function _page28($$payload, $$props) {
  push();
  let data = $$props["data"];
  const each_array = ensure_array_like(data.projects);
  $$payload.out += `<div class="container mx-auto p-4 max-w-lg"><h1 class="text-2xl font-bold mb-4">New Task</h1> <form method="POST" class="space-y-4"><div><label for="project_id">Project</label> <select name="project_id" id="project_id" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let project = each_array[$$index];
    $$payload.out += `<option${attr("value", project.id)}${maybe_selected($$payload, project.id)}>${escape_html(project.name)}</option>`;
  }
  $$payload.out += `<!--]--></select></div> <div><label for="name">Name</label> <input type="text" name="name" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"/></div> <div><label for="description">Description</label> <textarea name="description" rows="3" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"></textarea></div> <div><label for="due_date">Due Date</label> <input type="date" name="due_date" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"/></div> <div><label for="priority">Priority</label> <select name="priority" id="priority" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"><option value="0"${maybe_selected($$payload, "0")}>Low</option><option value="1"${maybe_selected($$payload, "1")} selected>Medium</option><option value="2"${maybe_selected($$payload, "2")}>High</option></select></div> <div class="flex justify-end space-x-2"><a href="/tasks" class="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">Cancel</a> <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">Create Task</button></div></form></div>`;
  bind_props($$props, { data });
  pop();
}
var init_page_svelte28 = __esm({
  ".svelte-kit/output/server/entries/pages/tasks/new/_page.svelte.js"() {
    init_chunks();
    init_client();
    __name(_page28, "_page");
  }
});

// .svelte-kit/output/server/nodes/29.js
var __exports30 = {};
__export(__exports30, {
  component: () => component30,
  fonts: () => fonts30,
  imports: () => imports30,
  index: () => index30,
  server: () => page_server_exports27,
  server_id: () => server_id27,
  stylesheets: () => stylesheets30
});
var index30, component_cache30, component30, server_id27, imports30, stylesheets30, fonts30;
var init__30 = __esm({
  ".svelte-kit/output/server/nodes/29.js"() {
    init_page_server27();
    index30 = 29;
    component30 = /* @__PURE__ */ __name(async () => component_cache30 ??= (await Promise.resolve().then(() => (init_page_svelte28(), page_svelte_exports28))).default, "component");
    server_id27 = "src/routes/tasks/new/+page.server.js";
    imports30 = ["_app/immutable/nodes/29.CSa0YoHd.js", "_app/immutable/chunks/CWj6FrbW.js", "_app/immutable/chunks/69_IOA4Y.js", "_app/immutable/chunks/DIeogL5L.js", "_app/immutable/chunks/D_AdGWyy.js", "_app/immutable/chunks/CxhRu3wT.js", "_app/immutable/chunks/BMlzsybF.js", "_app/immutable/chunks/C2Bgqaw1.js", "_app/immutable/chunks/xeqJHUo9.js", "_app/immutable/chunks/ClAlbAGz.js", "_app/immutable/chunks/C7WNTl10.js", "_app/immutable/chunks/6lfPsB8W.js", "_app/immutable/chunks/COTeNld2.js", "_app/immutable/chunks/BKg0ivWU.js", "_app/immutable/chunks/CamM0Y98.js"];
    stylesheets30 = [];
    fonts30 = [];
  }
});

// .svelte-kit/output/server/index.js
init_chunks();

// .svelte-kit/output/server/chunks/internal.js
init_chunks();
init_equality();
init_clsx();
var base = "";
var assets = base;
var app_dir = "_app";
var initial = { base, assets };
function override(paths) {
  base = paths.base;
  assets = paths.assets;
}
__name(override, "override");
function reset() {
  base = initial.base;
  assets = initial.assets;
}
__name(reset, "reset");
var public_env = {};
var safe_public_env = {};
function set_private_env(environment) {
}
__name(set_private_env, "set_private_env");
function set_public_env(environment) {
  public_env = environment;
}
__name(set_public_env, "set_public_env");
function set_safe_public_env(environment) {
  safe_public_env = environment;
}
__name(set_safe_public_env, "set_safe_public_env");
function hydration_mismatch(location) {
  {
    console.warn(`https://svelte.dev/e/hydration_mismatch`);
  }
}
__name(hydration_mismatch, "hydration_mismatch");
var hydrating = false;
function set_hydrating(value) {
  hydrating = value;
}
__name(set_hydrating, "set_hydrating");
var hydrate_node;
function set_hydrate_node(node) {
  if (node === null) {
    hydration_mismatch();
    throw HYDRATION_ERROR;
  }
  return hydrate_node = node;
}
__name(set_hydrate_node, "set_hydrate_node");
function hydrate_next() {
  return set_hydrate_node(
    /** @type {TemplateNode} */
    get_next_sibling(hydrate_node)
  );
}
__name(hydrate_next, "hydrate_next");
var PASSIVE_EVENTS = ["touchstart", "touchmove"];
function is_passive_event(name) {
  return PASSIVE_EVENTS.includes(name);
}
__name(is_passive_event, "is_passive_event");
var all_registered_events = /* @__PURE__ */ new Set();
var root_event_handles = /* @__PURE__ */ new Set();
function handle_event_propagation(event) {
  var handler_element = this;
  var owner_document = (
    /** @type {Node} */
    handler_element.ownerDocument
  );
  var event_name = event.type;
  var path = event.composedPath?.() || [];
  var current_target = (
    /** @type {null | Element} */
    path[0] || event.target
  );
  var path_idx = 0;
  var handled_at = event.__root;
  if (handled_at) {
    var at_idx = path.indexOf(handled_at);
    if (at_idx !== -1 && (handler_element === document || handler_element === /** @type {any} */
    window)) {
      event.__root = handler_element;
      return;
    }
    var handler_idx = path.indexOf(handler_element);
    if (handler_idx === -1) {
      return;
    }
    if (at_idx <= handler_idx) {
      path_idx = at_idx;
    }
  }
  current_target = /** @type {Element} */
  path[path_idx] || event.target;
  if (current_target === handler_element) return;
  define_property(event, "currentTarget", {
    configurable: true,
    get() {
      return current_target || owner_document;
    }
  });
  var previous_reaction = active_reaction;
  var previous_effect = active_effect;
  set_active_reaction(null);
  set_active_effect(null);
  try {
    var throw_error;
    var other_errors = [];
    while (current_target !== null) {
      var parent_element = current_target.assignedSlot || current_target.parentNode || /** @type {any} */
      current_target.host || null;
      try {
        var delegated = current_target["__" + event_name];
        if (delegated != null && (!/** @type {any} */
        current_target.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
        // -> the target could not have been disabled because it emits the event in the first place
        event.target === current_target)) {
          if (is_array(delegated)) {
            var [fn, ...data] = delegated;
            fn.apply(current_target, [event, ...data]);
          } else {
            delegated.call(current_target, event);
          }
        }
      } catch (error2) {
        if (throw_error) {
          other_errors.push(error2);
        } else {
          throw_error = error2;
        }
      }
      if (event.cancelBubble || parent_element === handler_element || parent_element === null) {
        break;
      }
      current_target = parent_element;
    }
    if (throw_error) {
      for (let error2 of other_errors) {
        queueMicrotask(() => {
          throw error2;
        });
      }
      throw throw_error;
    }
  } finally {
    event.__root = handler_element;
    delete event.currentTarget;
    set_active_reaction(previous_reaction);
    set_active_effect(previous_effect);
  }
}
__name(handle_event_propagation, "handle_event_propagation");
function assign_nodes(start, end) {
  var effect2 = (
    /** @type {Effect} */
    active_effect
  );
  if (effect2.nodes_start === null) {
    effect2.nodes_start = start;
    effect2.nodes_end = end;
  }
}
__name(assign_nodes, "assign_nodes");
function mount(component31, options2) {
  return _mount(component31, options2);
}
__name(mount, "mount");
function hydrate(component31, options2) {
  init_operations();
  options2.intro = options2.intro ?? false;
  const target = options2.target;
  const was_hydrating = hydrating;
  const previous_hydrate_node = hydrate_node;
  try {
    var anchor = (
      /** @type {TemplateNode} */
      get_first_child(target)
    );
    while (anchor && (anchor.nodeType !== 8 || /** @type {Comment} */
    anchor.data !== HYDRATION_START)) {
      anchor = /** @type {TemplateNode} */
      get_next_sibling(anchor);
    }
    if (!anchor) {
      throw HYDRATION_ERROR;
    }
    set_hydrating(true);
    set_hydrate_node(
      /** @type {Comment} */
      anchor
    );
    hydrate_next();
    const instance = _mount(component31, { ...options2, anchor });
    if (hydrate_node === null || hydrate_node.nodeType !== 8 || /** @type {Comment} */
    hydrate_node.data !== HYDRATION_END) {
      hydration_mismatch();
      throw HYDRATION_ERROR;
    }
    set_hydrating(false);
    return (
      /**  @type {Exports} */
      instance
    );
  } catch (error2) {
    if (error2 === HYDRATION_ERROR) {
      if (options2.recover === false) {
        hydration_failed();
      }
      init_operations();
      clear_text_content(target);
      set_hydrating(false);
      return mount(component31, options2);
    }
    throw error2;
  } finally {
    set_hydrating(was_hydrating);
    set_hydrate_node(previous_hydrate_node);
  }
}
__name(hydrate, "hydrate");
var document_listeners = /* @__PURE__ */ new Map();
function _mount(Component, { target, anchor, props = {}, events, context: context2, intro = true }) {
  init_operations();
  var registered_events = /* @__PURE__ */ new Set();
  var event_handle = /* @__PURE__ */ __name((events2) => {
    for (var i = 0; i < events2.length; i++) {
      var event_name = events2[i];
      if (registered_events.has(event_name)) continue;
      registered_events.add(event_name);
      var passive = is_passive_event(event_name);
      target.addEventListener(event_name, handle_event_propagation, { passive });
      var n2 = document_listeners.get(event_name);
      if (n2 === void 0) {
        document.addEventListener(event_name, handle_event_propagation, { passive });
        document_listeners.set(event_name, 1);
      } else {
        document_listeners.set(event_name, n2 + 1);
      }
    }
  }, "event_handle");
  event_handle(array_from(all_registered_events));
  root_event_handles.add(event_handle);
  var component31 = void 0;
  var unmount2 = component_root(() => {
    var anchor_node = anchor ?? target.appendChild(create_text());
    branch(() => {
      if (context2) {
        push$1({});
        var ctx = (
          /** @type {ComponentContext} */
          component_context
        );
        ctx.c = context2;
      }
      if (events) {
        props.$$events = events;
      }
      if (hydrating) {
        assign_nodes(
          /** @type {TemplateNode} */
          anchor_node,
          null
        );
      }
      component31 = Component(anchor_node, props) || {};
      if (hydrating) {
        active_effect.nodes_end = hydrate_node;
      }
      if (context2) {
        pop$1();
      }
    });
    return () => {
      for (var event_name of registered_events) {
        target.removeEventListener(event_name, handle_event_propagation);
        var n2 = (
          /** @type {number} */
          document_listeners.get(event_name)
        );
        if (--n2 === 0) {
          document.removeEventListener(event_name, handle_event_propagation);
          document_listeners.delete(event_name);
        } else {
          document_listeners.set(event_name, n2);
        }
      }
      root_event_handles.delete(event_handle);
      if (anchor_node !== anchor) {
        anchor_node.parentNode?.removeChild(anchor_node);
      }
    };
  });
  mounted_components.set(component31, unmount2);
  return component31;
}
__name(_mount, "_mount");
var mounted_components = /* @__PURE__ */ new WeakMap();
function unmount(component31, options2) {
  const fn = mounted_components.get(component31);
  if (fn) {
    mounted_components.delete(component31);
    return fn(options2);
  }
  return Promise.resolve();
}
__name(unmount, "unmount");
function asClassComponent$1(component31) {
  return class extends Svelte4Component {
    /** @param {any} options */
    constructor(options2) {
      super({
        component: component31,
        ...options2
      });
    }
  };
}
__name(asClassComponent$1, "asClassComponent$1");
var Svelte4Component = class {
  static {
    __name(this, "Svelte4Component");
  }
  /** @type {any} */
  #events;
  /** @type {Record<string, any>} */
  #instance;
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(options2) {
    var sources = /* @__PURE__ */ new Map();
    var add_source = /* @__PURE__ */ __name((key2, value) => {
      var s3 = mutable_source(value);
      sources.set(key2, s3);
      return s3;
    }, "add_source");
    const props = new Proxy(
      { ...options2.props || {}, $$events: {} },
      {
        get(target, prop) {
          return get(sources.get(prop) ?? add_source(prop, Reflect.get(target, prop)));
        },
        has(target, prop) {
          if (prop === LEGACY_PROPS) return true;
          get(sources.get(prop) ?? add_source(prop, Reflect.get(target, prop)));
          return Reflect.has(target, prop);
        },
        set(target, prop, value) {
          set(sources.get(prop) ?? add_source(prop, value), value);
          return Reflect.set(target, prop, value);
        }
      }
    );
    this.#instance = (options2.hydrate ? hydrate : mount)(options2.component, {
      target: options2.target,
      anchor: options2.anchor,
      props,
      context: options2.context,
      intro: options2.intro ?? false,
      recover: options2.recover
    });
    if (!options2?.props?.$$host || options2.sync === false) {
      flushSync();
    }
    this.#events = props.$$events;
    for (const key2 of Object.keys(this.#instance)) {
      if (key2 === "$set" || key2 === "$destroy" || key2 === "$on") continue;
      define_property(this, key2, {
        get() {
          return this.#instance[key2];
        },
        /** @param {any} value */
        set(value) {
          this.#instance[key2] = value;
        },
        enumerable: true
      });
    }
    this.#instance.$set = /** @param {Record<string, any>} next */
    (next) => {
      Object.assign(props, next);
    };
    this.#instance.$destroy = () => {
      unmount(this.#instance);
    };
  }
  /** @param {Record<string, any>} props */
  $set(props) {
    this.#instance.$set(props);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(event, callback) {
    this.#events[event] = this.#events[event] || [];
    const cb = /* @__PURE__ */ __name((...args) => callback.call(this, ...args), "cb");
    this.#events[event].push(cb);
    return () => {
      this.#events[event] = this.#events[event].filter(
        /** @param {any} fn */
        (fn) => fn !== cb
      );
    };
  }
  $destroy() {
    this.#instance.$destroy();
  }
};
var read_implementation = null;
function set_read_implementation(fn) {
  read_implementation = fn;
}
__name(set_read_implementation, "set_read_implementation");
function asClassComponent(component31) {
  const component_constructor = asClassComponent$1(component31);
  const _render = /* @__PURE__ */ __name((props, { context: context2 } = {}) => {
    const result = render(component31, { props, context: context2 });
    return {
      css: { code: "", map: null },
      head: result.head,
      html: result.body
    };
  }, "_render");
  component_constructor.render = _render;
  return component_constructor;
}
__name(asClassComponent, "asClassComponent");
var prerendering = false;
function Root($$payload, $$props) {
  push();
  let {
    stores: stores2,
    page: page3,
    constructors,
    components = [],
    form,
    data_0 = null,
    data_1 = null
  } = $$props;
  {
    setContext("__svelte__", stores2);
  }
  {
    stores2.page.set(page3);
  }
  const Pyramid_1 = constructors[1];
  if (constructors[1]) {
    $$payload.out += "<!--[-->";
    const Pyramid_0 = constructors[0];
    $$payload.out += `<!---->`;
    Pyramid_0($$payload, {
      data: data_0,
      form,
      children: /* @__PURE__ */ __name(($$payload2) => {
        $$payload2.out += `<!---->`;
        Pyramid_1($$payload2, { data: data_1, form });
        $$payload2.out += `<!---->`;
      }, "children"),
      $$slots: { default: true }
    });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    const Pyramid_0 = constructors[0];
    $$payload.out += `<!---->`;
    Pyramid_0($$payload, { data: data_0, form });
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!--]--> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
__name(Root, "Root");
var root = asClassComponent(Root);
var options = {
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hash_routing: false,
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root,
  service_worker: false,
  templates: {
    app: /* @__PURE__ */ __name(({ head, body: body2, assets: assets2, nonce, env }) => '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <link rel="icon" href="' + assets2 + '/favicon.png" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    ' + head + '\n  </head>\n  <body data-sveltekit-preload-data="hover">\n    <div style="display: contents">' + body2 + "</div>\n  </body>\n</html>", "app"),
    error: /* @__PURE__ */ __name(({ status, message }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n", "error")
  },
  version_hash: "ry2vo1"
};
async function get_hooks() {
  let handle2;
  let handleFetch;
  let handleError;
  let init2;
  ({ handle: handle2, handleFetch, handleError, init: init2 } = await Promise.resolve().then(() => (init_hooks_server(), hooks_server_exports)));
  let reroute;
  let transport;
  return {
    handle: handle2,
    handleFetch,
    handleError,
    init: init2,
    reroute,
    transport
  };
}
__name(get_hooks, "get_hooks");

// .svelte-kit/output/server/index.js
init_index2();

// node_modules/devalue/src/utils.js
var escaped = {
  "<": "\\u003C",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var DevalueError = class extends Error {
  static {
    __name(this, "DevalueError");
  }
  /**
   * @param {string} message
   * @param {string[]} keys
   */
  constructor(message, keys) {
    super(message);
    this.name = "DevalueError";
    this.path = keys.join("");
  }
};
function is_primitive(thing) {
  return Object(thing) !== thing;
}
__name(is_primitive, "is_primitive");
var object_proto_names = /* @__PURE__ */ Object.getOwnPropertyNames(
  Object.prototype
).sort().join("\0");
function is_plain_object(thing) {
  const proto = Object.getPrototypeOf(thing);
  return proto === Object.prototype || proto === null || Object.getOwnPropertyNames(proto).sort().join("\0") === object_proto_names;
}
__name(is_plain_object, "is_plain_object");
function get_type(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
__name(get_type, "get_type");
function get_escaped_char(char) {
  switch (char) {
    case '"':
      return '\\"';
    case "<":
      return "\\u003C";
    case "\\":
      return "\\\\";
    case "\n":
      return "\\n";
    case "\r":
      return "\\r";
    case "	":
      return "\\t";
    case "\b":
      return "\\b";
    case "\f":
      return "\\f";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return char < " " ? `\\u${char.charCodeAt(0).toString(16).padStart(4, "0")}` : "";
  }
}
__name(get_escaped_char, "get_escaped_char");
function stringify_string(str) {
  let result = "";
  let last_pos = 0;
  const len = str.length;
  for (let i = 0; i < len; i += 1) {
    const char = str[i];
    const replacement = get_escaped_char(char);
    if (replacement) {
      result += str.slice(last_pos, i) + replacement;
      last_pos = i + 1;
    }
  }
  return `"${last_pos === 0 ? str : result + str.slice(last_pos)}"`;
}
__name(stringify_string, "stringify_string");
function enumerable_symbols(object) {
  return Object.getOwnPropertySymbols(object).filter(
    (symbol) => Object.getOwnPropertyDescriptor(object, symbol).enumerable
  );
}
__name(enumerable_symbols, "enumerable_symbols");
var is_identifier = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function stringify_key(key2) {
  return is_identifier.test(key2) ? "." + key2 : "[" + JSON.stringify(key2) + "]";
}
__name(stringify_key, "stringify_key");

// node_modules/devalue/src/uneval.js
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafe_chars = /[<\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
function uneval(value, replacer) {
  const counts = /* @__PURE__ */ new Map();
  const keys = [];
  const custom = /* @__PURE__ */ new Map();
  function walk(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (!is_primitive(thing)) {
      if (counts.has(thing)) {
        counts.set(thing, counts.get(thing) + 1);
        return;
      }
      counts.set(thing, 1);
      if (replacer) {
        const str2 = replacer(thing);
        if (typeof str2 === "string") {
          custom.set(thing, str2);
          return;
        }
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "BigInt":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach((value2, i) => {
            keys.push(`[${i}]`);
            walk(value2);
            keys.pop();
          });
          break;
        case "Set":
          Array.from(thing).forEach(walk);
          break;
        case "Map":
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive(key2) : "..."})`
            );
            walk(value2);
            keys.pop();
          }
          break;
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "BigInt64Array":
        case "BigUint64Array":
          return;
        case "ArrayBuffer":
          return;
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (enumerable_symbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          for (const key2 in thing) {
            keys.push(stringify_key(key2));
            walk(thing[key2]);
            keys.pop();
          }
      }
    }
  }
  __name(walk, "walk");
  walk(value);
  const names = /* @__PURE__ */ new Map();
  Array.from(counts).filter((entry) => entry[1] > 1).sort((a, b) => b[1] - a[1]).forEach((entry, i) => {
    names.set(entry[0], get_name(i));
  });
  function stringify3(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (is_primitive(thing)) {
      return stringify_primitive(thing);
    }
    if (custom.has(thing)) {
      return custom.get(thing);
    }
    const type = get_type(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify3(thing.valueOf())})`;
      case "RegExp":
        return `new RegExp(${stringify_string(thing.source)}, "${thing.flags}")`;
      case "Date":
        return `new Date(${thing.getTime()})`;
      case "Array":
        const members = (
          /** @type {any[]} */
          thing.map(
            (v, i) => i in thing ? stringify3(v) : ""
          )
        );
        const tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return `[${members.join(",")}${tail}]`;
      case "Set":
      case "Map":
        return `new ${type}([${Array.from(thing).map(stringify3).join(",")}])`;
      case "Int8Array":
      case "Uint8Array":
      case "Uint8ClampedArray":
      case "Int16Array":
      case "Uint16Array":
      case "Int32Array":
      case "Uint32Array":
      case "Float32Array":
      case "Float64Array":
      case "BigInt64Array":
      case "BigUint64Array": {
        const typedArray = thing;
        return `new ${type}([${typedArray.toString()}])`;
      }
      case "ArrayBuffer": {
        const ui8 = new Uint8Array(thing);
        return `new Uint8Array([${ui8.toString()}]).buffer`;
      }
      default:
        const obj = `{${Object.keys(thing).map((key2) => `${safe_key(key2)}:${stringify3(thing[key2])}`).join(",")}}`;
        const proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? `Object.assign(Object.create(null),${obj})` : `Object.create(null)`;
        }
        return obj;
    }
  }
  __name(stringify3, "stringify");
  const str = stringify3(value);
  if (names.size) {
    const params = [];
    const statements = [];
    const values = [];
    names.forEach((name, thing) => {
      params.push(name);
      if (custom.has(thing)) {
        values.push(
          /** @type {string} */
          custom.get(thing)
        );
        return;
      }
      if (is_primitive(thing)) {
        values.push(stringify_primitive(thing));
        return;
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values.push(`Object(${stringify3(thing.valueOf())})`);
          break;
        case "RegExp":
          values.push(thing.toString());
          break;
        case "Date":
          values.push(`new Date(${thing.getTime()})`);
          break;
        case "Array":
          values.push(`Array(${thing.length})`);
          thing.forEach((v, i) => {
            statements.push(`${name}[${i}]=${stringify3(v)}`);
          });
          break;
        case "Set":
          values.push(`new Set`);
          statements.push(
            `${name}.${Array.from(thing).map((v) => `add(${stringify3(v)})`).join(".")}`
          );
          break;
        case "Map":
          values.push(`new Map`);
          statements.push(
            `${name}.${Array.from(thing).map(([k, v]) => `set(${stringify3(k)}, ${stringify3(v)})`).join(".")}`
          );
          break;
        default:
          values.push(
            Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}"
          );
          Object.keys(thing).forEach((key2) => {
            statements.push(
              `${name}${safe_prop(key2)}=${stringify3(thing[key2])}`
            );
          });
      }
    });
    statements.push(`return ${str}`);
    return `(function(${params.join(",")}){${statements.join(
      ";"
    )}}(${values.join(",")}))`;
  } else {
    return str;
  }
}
__name(uneval, "uneval");
function get_name(num) {
  let name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? `${name}0` : name;
}
__name(get_name, "get_name");
function escape_unsafe_char(c2) {
  return escaped[c2] || c2;
}
__name(escape_unsafe_char, "escape_unsafe_char");
function escape_unsafe_chars(str) {
  return str.replace(unsafe_chars, escape_unsafe_char);
}
__name(escape_unsafe_chars, "escape_unsafe_chars");
function safe_key(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? key2 : escape_unsafe_chars(JSON.stringify(key2));
}
__name(safe_key, "safe_key");
function safe_prop(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? `.${key2}` : `[${escape_unsafe_chars(JSON.stringify(key2))}]`;
}
__name(safe_prop, "safe_prop");
function stringify_primitive(thing) {
  if (typeof thing === "string") return stringify_string(thing);
  if (thing === void 0) return "void 0";
  if (thing === 0 && 1 / thing < 0) return "-0";
  const str = String(thing);
  if (typeof thing === "number") return str.replace(/^(-)?0\./, "$1.");
  if (typeof thing === "bigint") return thing + "n";
  return str;
}
__name(stringify_primitive, "stringify_primitive");

// node_modules/devalue/src/base64.js
function encode64(arraybuffer) {
  const dv = new DataView(arraybuffer);
  let binaryString = "";
  for (let i = 0; i < arraybuffer.byteLength; i++) {
    binaryString += String.fromCharCode(dv.getUint8(i));
  }
  return binaryToAscii(binaryString);
}
__name(encode64, "encode64");
var KEY_STRING = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function binaryToAscii(str) {
  let out = "";
  for (let i = 0; i < str.length; i += 3) {
    const groupsOfSix = [void 0, void 0, void 0, void 0];
    groupsOfSix[0] = str.charCodeAt(i) >> 2;
    groupsOfSix[1] = (str.charCodeAt(i) & 3) << 4;
    if (str.length > i + 1) {
      groupsOfSix[1] |= str.charCodeAt(i + 1) >> 4;
      groupsOfSix[2] = (str.charCodeAt(i + 1) & 15) << 2;
    }
    if (str.length > i + 2) {
      groupsOfSix[2] |= str.charCodeAt(i + 2) >> 6;
      groupsOfSix[3] = str.charCodeAt(i + 2) & 63;
    }
    for (let j = 0; j < groupsOfSix.length; j++) {
      if (typeof groupsOfSix[j] === "undefined") {
        out += "=";
      } else {
        out += KEY_STRING[groupsOfSix[j]];
      }
    }
  }
  return out;
}
__name(binaryToAscii, "binaryToAscii");

// node_modules/devalue/src/constants.js
var UNDEFINED = -1;
var HOLE = -2;
var NAN = -3;
var POSITIVE_INFINITY = -4;
var NEGATIVE_INFINITY = -5;
var NEGATIVE_ZERO = -6;

// node_modules/devalue/src/stringify.js
function stringify2(value, reducers) {
  const stringified = [];
  const indexes = /* @__PURE__ */ new Map();
  const custom = [];
  if (reducers) {
    for (const key2 of Object.getOwnPropertyNames(reducers)) {
      custom.push({ key: key2, fn: reducers[key2] });
    }
  }
  const keys = [];
  let p = 0;
  function flatten(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (indexes.has(thing)) return indexes.get(thing);
    if (thing === void 0) return UNDEFINED;
    if (Number.isNaN(thing)) return NAN;
    if (thing === Infinity) return POSITIVE_INFINITY;
    if (thing === -Infinity) return NEGATIVE_INFINITY;
    if (thing === 0 && 1 / thing < 0) return NEGATIVE_ZERO;
    const index32 = p++;
    indexes.set(thing, index32);
    for (const { key: key2, fn } of custom) {
      const value2 = fn(thing);
      if (value2) {
        stringified[index32] = `["${key2}",${flatten(value2)}]`;
        return index32;
      }
    }
    let str = "";
    if (is_primitive(thing)) {
      str = stringify_primitive2(thing);
    } else {
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          str = `["Object",${stringify_primitive2(thing)}]`;
          break;
        case "BigInt":
          str = `["BigInt",${thing}]`;
          break;
        case "Date":
          const valid = !isNaN(thing.getDate());
          str = `["Date","${valid ? thing.toISOString() : ""}"]`;
          break;
        case "RegExp":
          const { source: source2, flags } = thing;
          str = flags ? `["RegExp",${stringify_string(source2)},"${flags}"]` : `["RegExp",${stringify_string(source2)}]`;
          break;
        case "Array":
          str = "[";
          for (let i = 0; i < thing.length; i += 1) {
            if (i > 0) str += ",";
            if (i in thing) {
              keys.push(`[${i}]`);
              str += flatten(thing[i]);
              keys.pop();
            } else {
              str += HOLE;
            }
          }
          str += "]";
          break;
        case "Set":
          str = '["Set"';
          for (const value2 of thing) {
            str += `,${flatten(value2)}`;
          }
          str += "]";
          break;
        case "Map":
          str = '["Map"';
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive2(key2) : "..."})`
            );
            str += `,${flatten(key2)},${flatten(value2)}`;
            keys.pop();
          }
          str += "]";
          break;
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "BigInt64Array":
        case "BigUint64Array": {
          const typedArray = thing;
          const base642 = encode64(typedArray.buffer);
          str = '["' + type + '","' + base642 + '"]';
          break;
        }
        case "ArrayBuffer": {
          const arraybuffer = thing;
          const base642 = encode64(arraybuffer);
          str = `["ArrayBuffer","${base642}"]`;
          break;
        }
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (enumerable_symbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          if (Object.getPrototypeOf(thing) === null) {
            str = '["null"';
            for (const key2 in thing) {
              keys.push(stringify_key(key2));
              str += `,${stringify_string(key2)},${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "]";
          } else {
            str = "{";
            let started = false;
            for (const key2 in thing) {
              if (started) str += ",";
              started = true;
              keys.push(stringify_key(key2));
              str += `${stringify_string(key2)}:${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "}";
          }
      }
    }
    stringified[index32] = str;
    return index32;
  }
  __name(flatten, "flatten");
  const index31 = flatten(value);
  if (index31 < 0) return `${index31}`;
  return `[${stringified.join(",")}]`;
}
__name(stringify2, "stringify");
function stringify_primitive2(thing) {
  const type = typeof thing;
  if (type === "string") return stringify_string(thing);
  if (thing instanceof String) return stringify_string(thing.toString());
  if (thing === void 0) return UNDEFINED.toString();
  if (thing === 0 && 1 / thing < 0) return NEGATIVE_ZERO.toString();
  if (type === "bigint") return `["BigInt","${thing}"]`;
  return String(thing);
}
__name(stringify_primitive2, "stringify_primitive");

// .svelte-kit/output/server/index.js
init_exports();
var import_cookie = __toESM(require_cookie(), 1);
var set_cookie_parser = __toESM(require_set_cookie(), 1);
var SVELTE_KIT_ASSETS = "/_svelte_kit_assets";
var ENDPOINT_METHODS = ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"];
var PAGE_METHODS = ["GET", "POST", "HEAD"];
function negotiate(accept, types) {
  const parts = [];
  accept.split(",").forEach((str, i) => {
    const match = /([^/ \t]+)\/([^; \t]+)[ \t]*(?:;[ \t]*q=([0-9.]+))?/.exec(str);
    if (match) {
      const [, type, subtype, q = "1"] = match;
      parts.push({ type, subtype, q: +q, i });
    }
  });
  parts.sort((a, b) => {
    if (a.q !== b.q) {
      return b.q - a.q;
    }
    if (a.subtype === "*" !== (b.subtype === "*")) {
      return a.subtype === "*" ? 1 : -1;
    }
    if (a.type === "*" !== (b.type === "*")) {
      return a.type === "*" ? 1 : -1;
    }
    return a.i - b.i;
  });
  let accepted;
  let min_priority = Infinity;
  for (const mimetype of types) {
    const [type, subtype] = mimetype.split("/");
    const priority = parts.findIndex(
      (part) => (part.type === type || part.type === "*") && (part.subtype === subtype || part.subtype === "*")
    );
    if (priority !== -1 && priority < min_priority) {
      accepted = mimetype;
      min_priority = priority;
    }
  }
  return accepted;
}
__name(negotiate, "negotiate");
function is_content_type(request, ...types) {
  const type = request.headers.get("content-type")?.split(";", 1)[0].trim() ?? "";
  return types.includes(type.toLowerCase());
}
__name(is_content_type, "is_content_type");
function is_form_content_type(request) {
  return is_content_type(
    request,
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
  );
}
__name(is_form_content_type, "is_form_content_type");
var request_event = null;
var als;
import("node:async_hooks").then((hooks) => als = new hooks.AsyncLocalStorage()).catch(() => {
});
function with_event(event, fn) {
  try {
    request_event = event;
    return als ? als.run(event, fn) : fn();
  } finally {
    request_event = null;
  }
}
__name(with_event, "with_event");
var DATA_SUFFIX = "/__data.json";
var HTML_DATA_SUFFIX = ".html__data.json";
function has_data_suffix(pathname) {
  return pathname.endsWith(DATA_SUFFIX) || pathname.endsWith(HTML_DATA_SUFFIX);
}
__name(has_data_suffix, "has_data_suffix");
function add_data_suffix(pathname) {
  if (pathname.endsWith(".html")) return pathname.replace(/\.html$/, HTML_DATA_SUFFIX);
  return pathname.replace(/\/$/, "") + DATA_SUFFIX;
}
__name(add_data_suffix, "add_data_suffix");
function strip_data_suffix(pathname) {
  if (pathname.endsWith(HTML_DATA_SUFFIX)) {
    return pathname.slice(0, -HTML_DATA_SUFFIX.length) + ".html";
  }
  return pathname.slice(0, -DATA_SUFFIX.length);
}
__name(strip_data_suffix, "strip_data_suffix");
var ROUTE_SUFFIX = "/__route.js";
function has_resolution_suffix(pathname) {
  return pathname.endsWith(ROUTE_SUFFIX);
}
__name(has_resolution_suffix, "has_resolution_suffix");
function add_resolution_suffix(pathname) {
  return pathname.replace(/\/$/, "") + ROUTE_SUFFIX;
}
__name(add_resolution_suffix, "add_resolution_suffix");
function strip_resolution_suffix(pathname) {
  return pathname.slice(0, -ROUTE_SUFFIX.length);
}
__name(strip_resolution_suffix, "strip_resolution_suffix");
function coalesce_to_error(err) {
  return err instanceof Error || err && /** @type {any} */
  err.name && /** @type {any} */
  err.message ? (
    /** @type {Error} */
    err
  ) : new Error(JSON.stringify(err));
}
__name(coalesce_to_error, "coalesce_to_error");
function normalize_error(error2) {
  return (
    /** @type {import('../runtime/control.js').Redirect | HttpError | SvelteKitError | Error} */
    error2
  );
}
__name(normalize_error, "normalize_error");
function get_status(error2) {
  return error2 instanceof HttpError || error2 instanceof SvelteKitError ? error2.status : 500;
}
__name(get_status, "get_status");
function get_message(error2) {
  return error2 instanceof SvelteKitError ? error2.text : "Internal Error";
}
__name(get_message, "get_message");
var escape_html_attr_dict = {
  "&": "&amp;",
  '"': "&quot;"
  // Svelte also escapes < because the escape function could be called inside a `noscript` there
  // https://github.com/sveltejs/svelte/security/advisories/GHSA-8266-84wp-wv5c
  // However, that doesn't apply in SvelteKit
};
var escape_html_dict = {
  "&": "&amp;",
  "<": "&lt;"
};
var surrogates = (
  // high surrogate without paired low surrogate
  "[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]"
);
var escape_html_attr_regex = new RegExp(
  `[${Object.keys(escape_html_attr_dict).join("")}]|` + surrogates,
  "g"
);
var escape_html_regex = new RegExp(
  `[${Object.keys(escape_html_dict).join("")}]|` + surrogates,
  "g"
);
function escape_html2(str, is_attr) {
  const dict = is_attr ? escape_html_attr_dict : escape_html_dict;
  const escaped_str = str.replace(is_attr ? escape_html_attr_regex : escape_html_regex, (match) => {
    if (match.length === 2) {
      return match;
    }
    return dict[match] ?? `&#${match.charCodeAt(0)};`;
  });
  return escaped_str;
}
__name(escape_html2, "escape_html");
function method_not_allowed(mod, method) {
  return text(`${method} method not allowed`, {
    status: 405,
    headers: {
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: allowed_methods(mod).join(", ")
    }
  });
}
__name(method_not_allowed, "method_not_allowed");
function allowed_methods(mod) {
  const allowed = ENDPOINT_METHODS.filter((method) => method in mod);
  if ("GET" in mod || "HEAD" in mod) allowed.push("HEAD");
  return allowed;
}
__name(allowed_methods, "allowed_methods");
function static_error_page(options2, status, message) {
  let page3 = options2.templates.error({ status, message: escape_html2(message) });
  return text(page3, {
    headers: { "content-type": "text/html; charset=utf-8" },
    status
  });
}
__name(static_error_page, "static_error_page");
async function handle_fatal_error(event, options2, error2) {
  error2 = error2 instanceof HttpError ? error2 : coalesce_to_error(error2);
  const status = get_status(error2);
  const body2 = await handle_error_and_jsonify(event, options2, error2);
  const type = negotiate(event.request.headers.get("accept") || "text/html", [
    "application/json",
    "text/html"
  ]);
  if (event.isDataRequest || type === "application/json") {
    return json(body2, {
      status
    });
  }
  return static_error_page(options2, status, body2.message);
}
__name(handle_fatal_error, "handle_fatal_error");
async function handle_error_and_jsonify(event, options2, error2) {
  if (error2 instanceof HttpError) {
    return error2.body;
  }
  const status = get_status(error2);
  const message = get_message(error2);
  return await with_event(
    event,
    () => options2.hooks.handleError({ error: error2, event, status, message })
  ) ?? { message };
}
__name(handle_error_and_jsonify, "handle_error_and_jsonify");
function redirect_response(status, location) {
  const response = new Response(void 0, {
    status,
    headers: { location }
  });
  return response;
}
__name(redirect_response, "redirect_response");
function clarify_devalue_error(event, error2) {
  if (error2.path) {
    return `Data returned from \`load\` while rendering ${event.route.id} is not serializable: ${error2.message} (${error2.path})`;
  }
  if (error2.path === "") {
    return `Data returned from \`load\` while rendering ${event.route.id} is not a plain object`;
  }
  return error2.message;
}
__name(clarify_devalue_error, "clarify_devalue_error");
function serialize_uses(node) {
  const uses = {};
  if (node.uses && node.uses.dependencies.size > 0) {
    uses.dependencies = Array.from(node.uses.dependencies);
  }
  if (node.uses && node.uses.search_params.size > 0) {
    uses.search_params = Array.from(node.uses.search_params);
  }
  if (node.uses && node.uses.params.size > 0) {
    uses.params = Array.from(node.uses.params);
  }
  if (node.uses?.parent) uses.parent = 1;
  if (node.uses?.route) uses.route = 1;
  if (node.uses?.url) uses.url = 1;
  return uses;
}
__name(serialize_uses, "serialize_uses");
function has_prerendered_path(manifest2, pathname) {
  return manifest2._.prerendered_routes.has(pathname) || pathname.at(-1) === "/" && manifest2._.prerendered_routes.has(pathname.slice(0, -1));
}
__name(has_prerendered_path, "has_prerendered_path");
async function render_endpoint(event, mod, state2) {
  const method = (
    /** @type {import('types').HttpMethod} */
    event.request.method
  );
  let handler = mod[method] || mod.fallback;
  if (method === "HEAD" && !mod.HEAD && mod.GET) {
    handler = mod.GET;
  }
  if (!handler) {
    return method_not_allowed(mod, method);
  }
  const prerender = mod.prerender ?? state2.prerender_default;
  if (prerender && (mod.POST || mod.PATCH || mod.PUT || mod.DELETE)) {
    throw new Error("Cannot prerender endpoints that have mutative methods");
  }
  if (state2.prerendering && !state2.prerendering.inside_reroute && !prerender) {
    if (state2.depth > 0) {
      throw new Error(`${event.route.id} is not prerenderable`);
    } else {
      return new Response(void 0, { status: 204 });
    }
  }
  try {
    const response = await with_event(
      event,
      () => handler(
        /** @type {import('@sveltejs/kit').RequestEvent<Record<string, any>>} */
        event
      )
    );
    if (!(response instanceof Response)) {
      throw new Error(
        `Invalid response from route ${event.url.pathname}: handler should return a Response object`
      );
    }
    if (state2.prerendering && (!state2.prerendering.inside_reroute || prerender)) {
      const cloned = new Response(response.clone().body, {
        status: response.status,
        statusText: response.statusText,
        headers: new Headers(response.headers)
      });
      cloned.headers.set("x-sveltekit-prerender", String(prerender));
      if (state2.prerendering.inside_reroute && prerender) {
        cloned.headers.set(
          "x-sveltekit-routeid",
          encodeURI(
            /** @type {string} */
            event.route.id
          )
        );
        state2.prerendering.dependencies.set(event.url.pathname, { response: cloned, body: null });
      } else {
        return cloned;
      }
    }
    return response;
  } catch (e3) {
    if (e3 instanceof Redirect) {
      return new Response(void 0, {
        status: e3.status,
        headers: { location: e3.location }
      });
    }
    throw e3;
  }
}
__name(render_endpoint, "render_endpoint");
function is_endpoint_request(event) {
  const { method, headers: headers2 } = event.request;
  if (ENDPOINT_METHODS.includes(method) && !PAGE_METHODS.includes(method)) {
    return true;
  }
  if (method === "POST" && headers2.get("x-sveltekit-action") === "true") return false;
  const accept = event.request.headers.get("accept") ?? "*/*";
  return negotiate(accept, ["*", "text/html"]) !== "text/html";
}
__name(is_endpoint_request, "is_endpoint_request");
function compact(arr) {
  return arr.filter(
    /** @returns {val is NonNullable<T>} */
    (val) => val != null
  );
}
__name(compact, "compact");
function is_action_json_request(event) {
  const accept = negotiate(event.request.headers.get("accept") ?? "*/*", [
    "application/json",
    "text/html"
  ]);
  return accept === "application/json" && event.request.method === "POST";
}
__name(is_action_json_request, "is_action_json_request");
async function handle_action_json_request(event, options2, server2) {
  const actions22 = server2?.actions;
  if (!actions22) {
    const no_actions_error = new SvelteKitError(
      405,
      "Method Not Allowed",
      `POST method not allowed. No form actions exist for ${"this page"}`
    );
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, options2, no_actions_error)
      },
      {
        status: no_actions_error.status,
        headers: {
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
          // "The server must generate an Allow header field in a 405 status code response"
          allow: "GET"
        }
      }
    );
  }
  check_named_default_separate(actions22);
  try {
    const data = await call_action(event, actions22);
    if (false) ;
    if (data instanceof ActionFailure) {
      return action_json({
        type: "failure",
        status: data.status,
        // @ts-expect-error we assign a string to what is supposed to be an object. That's ok
        // because we don't use the object outside, and this way we have better code navigation
        // through knowing where the related interface is used.
        data: stringify_action_response(
          data.data,
          /** @type {string} */
          event.route.id,
          options2.hooks.transport
        )
      });
    } else {
      return action_json({
        type: "success",
        status: data ? 200 : 204,
        // @ts-expect-error see comment above
        data: stringify_action_response(
          data,
          /** @type {string} */
          event.route.id,
          options2.hooks.transport
        )
      });
    }
  } catch (e3) {
    const err = normalize_error(e3);
    if (err instanceof Redirect) {
      return action_json_redirect(err);
    }
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, options2, check_incorrect_fail_use(err))
      },
      {
        status: get_status(err)
      }
    );
  }
}
__name(handle_action_json_request, "handle_action_json_request");
function check_incorrect_fail_use(error2) {
  return error2 instanceof ActionFailure ? new Error('Cannot "throw fail()". Use "return fail()"') : error2;
}
__name(check_incorrect_fail_use, "check_incorrect_fail_use");
function action_json_redirect(redirect2) {
  return action_json({
    type: "redirect",
    status: redirect2.status,
    location: redirect2.location
  });
}
__name(action_json_redirect, "action_json_redirect");
function action_json(data, init2) {
  return json(data, init2);
}
__name(action_json, "action_json");
function is_action_request(event) {
  return event.request.method === "POST";
}
__name(is_action_request, "is_action_request");
async function handle_action_request(event, server2) {
  const actions22 = server2?.actions;
  if (!actions22) {
    event.setHeaders({
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: "GET"
    });
    return {
      type: "error",
      error: new SvelteKitError(
        405,
        "Method Not Allowed",
        `POST method not allowed. No form actions exist for ${"this page"}`
      )
    };
  }
  check_named_default_separate(actions22);
  try {
    const data = await call_action(event, actions22);
    if (false) ;
    if (data instanceof ActionFailure) {
      return {
        type: "failure",
        status: data.status,
        data: data.data
      };
    } else {
      return {
        type: "success",
        status: 200,
        // @ts-expect-error this will be removed upon serialization, so `undefined` is the same as omission
        data
      };
    }
  } catch (e3) {
    const err = normalize_error(e3);
    if (err instanceof Redirect) {
      return {
        type: "redirect",
        status: err.status,
        location: err.location
      };
    }
    return {
      type: "error",
      error: check_incorrect_fail_use(err)
    };
  }
}
__name(handle_action_request, "handle_action_request");
function check_named_default_separate(actions22) {
  if (actions22.default && Object.keys(actions22).length > 1) {
    throw new Error(
      "When using named actions, the default action cannot be used. See the docs for more info: https://svelte.dev/docs/kit/form-actions#named-actions"
    );
  }
}
__name(check_named_default_separate, "check_named_default_separate");
async function call_action(event, actions22) {
  const url = new URL(event.request.url);
  let name = "default";
  for (const param of url.searchParams) {
    if (param[0].startsWith("/")) {
      name = param[0].slice(1);
      if (name === "default") {
        throw new Error('Cannot use reserved action name "default"');
      }
      break;
    }
  }
  const action = actions22[name];
  if (!action) {
    throw new SvelteKitError(404, "Not Found", `No action with name '${name}' found`);
  }
  if (!is_form_content_type(event.request)) {
    throw new SvelteKitError(
      415,
      "Unsupported Media Type",
      `Form actions expect form-encoded data \u2014 received ${event.request.headers.get(
        "content-type"
      )}`
    );
  }
  return with_event(event, () => action(event));
}
__name(call_action, "call_action");
function uneval_action_response(data, route_id, transport) {
  const replacer = /* @__PURE__ */ __name((thing) => {
    for (const key2 in transport) {
      const encoded = transport[key2].encode(thing);
      if (encoded) {
        return `app.decode('${key2}', ${uneval(encoded, replacer)})`;
      }
    }
  }, "replacer");
  return try_serialize(data, (value) => uneval(value, replacer), route_id);
}
__name(uneval_action_response, "uneval_action_response");
function stringify_action_response(data, route_id, transport) {
  const encoders = Object.fromEntries(
    Object.entries(transport).map(([key2, value]) => [key2, value.encode])
  );
  return try_serialize(data, (value) => stringify2(value, encoders), route_id);
}
__name(stringify_action_response, "stringify_action_response");
function try_serialize(data, fn, route_id) {
  try {
    return fn(data);
  } catch (e3) {
    const error2 = (
      /** @type {any} */
      e3
    );
    if (data instanceof Response) {
      throw new Error(
        `Data returned from action inside ${route_id} is not serializable. Form actions need to return plain objects or fail(). E.g. return { success: true } or return fail(400, { message: "invalid" });`
      );
    }
    if ("path" in error2) {
      let message = `Data returned from action inside ${route_id} is not serializable: ${error2.message}`;
      if (error2.path !== "") message += ` (data.${error2.path})`;
      throw new Error(message);
    }
    throw error2;
  }
}
__name(try_serialize, "try_serialize");
var INVALIDATED_PARAM = "x-sveltekit-invalidated";
var TRAILING_SLASH_PARAM = "x-sveltekit-trailing-slash";
function b64_encode(buffer) {
  if (globalThis.Buffer) {
    return Buffer.from(buffer).toString("base64");
  }
  const little_endian = new Uint8Array(new Uint16Array([1]).buffer)[0] > 0;
  return btoa(
    new TextDecoder(little_endian ? "utf-16le" : "utf-16be").decode(
      new Uint16Array(new Uint8Array(buffer))
    )
  );
}
__name(b64_encode, "b64_encode");
function get_relative_path(from, to) {
  const from_parts = from.split(/[/\\]/);
  const to_parts = to.split(/[/\\]/);
  from_parts.pop();
  while (from_parts[0] === to_parts[0]) {
    from_parts.shift();
    to_parts.shift();
  }
  let i = from_parts.length;
  while (i--) from_parts[i] = "..";
  return from_parts.concat(to_parts).join("/");
}
__name(get_relative_path, "get_relative_path");
async function load_server_data({ event, state: state2, node, parent }) {
  if (!node?.server) return null;
  let is_tracking = true;
  const uses = {
    dependencies: /* @__PURE__ */ new Set(),
    params: /* @__PURE__ */ new Set(),
    parent: false,
    route: false,
    url: false,
    search_params: /* @__PURE__ */ new Set()
  };
  const load23 = node.server.load;
  const slash = node.server.trailingSlash;
  if (!load23) {
    return { type: "data", data: null, uses, slash };
  }
  const url = make_trackable(
    event.url,
    () => {
      if (is_tracking) {
        uses.url = true;
      }
    },
    (param) => {
      if (is_tracking) {
        uses.search_params.add(param);
      }
    }
  );
  if (state2.prerendering) {
    disable_search(url);
  }
  let done = false;
  const result = await with_event(
    event,
    () => load23.call(null, {
      ...event,
      fetch: /* @__PURE__ */ __name((info, init2) => {
        const url2 = new URL(info instanceof Request ? info.url : info, event.url);
        if (DEV && done && !uses.dependencies.has(url2.href)) ;
        return event.fetch(info, init2);
      }, "fetch"),
      /** @param {string[]} deps */
      depends: /* @__PURE__ */ __name((...deps) => {
        for (const dep of deps) {
          const { href } = new URL(dep, event.url);
          if (DEV) ;
          uses.dependencies.add(href);
        }
      }, "depends"),
      params: new Proxy(event.params, {
        get: /* @__PURE__ */ __name((target, key2) => {
          if (DEV && done && typeof key2 === "string" && !uses.params.has(key2)) ;
          if (is_tracking) {
            uses.params.add(key2);
          }
          return target[
            /** @type {string} */
            key2
          ];
        }, "get")
      }),
      parent: /* @__PURE__ */ __name(async () => {
        if (DEV && done && !uses.parent) ;
        if (is_tracking) {
          uses.parent = true;
        }
        return parent();
      }, "parent"),
      route: new Proxy(event.route, {
        get: /* @__PURE__ */ __name((target, key2) => {
          if (DEV && done && typeof key2 === "string" && !uses.route) ;
          if (is_tracking) {
            uses.route = true;
          }
          return target[
            /** @type {'id'} */
            key2
          ];
        }, "get")
      }),
      url,
      untrack(fn) {
        is_tracking = false;
        try {
          return fn();
        } finally {
          is_tracking = true;
        }
      }
    })
  );
  done = true;
  return {
    type: "data",
    data: result ?? null,
    uses,
    slash
  };
}
__name(load_server_data, "load_server_data");
async function load_data({
  event,
  fetched,
  node,
  parent,
  server_data_promise,
  state: state2,
  resolve_opts,
  csr
}) {
  const server_data_node = await server_data_promise;
  if (!node?.universal?.load) {
    return server_data_node?.data ?? null;
  }
  const result = await node.universal.load.call(null, {
    url: event.url,
    params: event.params,
    data: server_data_node?.data ?? null,
    route: event.route,
    fetch: create_universal_fetch(event, state2, fetched, csr, resolve_opts),
    setHeaders: event.setHeaders,
    depends: /* @__PURE__ */ __name(() => {
    }, "depends"),
    parent,
    untrack: /* @__PURE__ */ __name((fn) => fn(), "untrack")
  });
  return result ?? null;
}
__name(load_data, "load_data");
function create_universal_fetch(event, state2, fetched, csr, resolve_opts) {
  const universal_fetch = /* @__PURE__ */ __name(async (input, init2) => {
    const cloned_body = input instanceof Request && input.body ? input.clone().body : null;
    const cloned_headers = input instanceof Request && [...input.headers].length ? new Headers(input.headers) : init2?.headers;
    let response = await event.fetch(input, init2);
    const url = new URL(input instanceof Request ? input.url : input, event.url);
    const same_origin = url.origin === event.url.origin;
    let dependency;
    if (same_origin) {
      if (state2.prerendering) {
        dependency = { response, body: null };
        state2.prerendering.dependencies.set(url.pathname, dependency);
      }
    } else if (url.protocol === "https:" || url.protocol === "http:") {
      const mode = input instanceof Request ? input.mode : init2?.mode ?? "cors";
      if (mode === "no-cors") {
        response = new Response("", {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers
        });
      } else {
        const acao = response.headers.get("access-control-allow-origin");
        if (!acao || acao !== event.url.origin && acao !== "*") {
          throw new Error(
            `CORS error: ${acao ? "Incorrect" : "No"} 'Access-Control-Allow-Origin' header is present on the requested resource`
          );
        }
      }
    }
    const proxy2 = new Proxy(response, {
      get(response2, key2, _receiver) {
        async function push_fetched(body2, is_b64) {
          const status_number = Number(response2.status);
          if (isNaN(status_number)) {
            throw new Error(
              `response.status is not a number. value: "${response2.status}" type: ${typeof response2.status}`
            );
          }
          fetched.push({
            url: same_origin ? url.href.slice(event.url.origin.length) : url.href,
            method: event.request.method,
            request_body: (
              /** @type {string | ArrayBufferView | undefined} */
              input instanceof Request && cloned_body ? await stream_to_string(cloned_body) : init2?.body
            ),
            request_headers: cloned_headers,
            response_body: body2,
            response: response2,
            is_b64
          });
        }
        __name(push_fetched, "push_fetched");
        if (key2 === "arrayBuffer") {
          return async () => {
            const buffer = await response2.arrayBuffer();
            if (dependency) {
              dependency.body = new Uint8Array(buffer);
            }
            if (buffer instanceof ArrayBuffer) {
              await push_fetched(b64_encode(buffer), true);
            }
            return buffer;
          };
        }
        async function text2() {
          const body2 = await response2.text();
          if (!body2 || typeof body2 === "string") {
            await push_fetched(body2, false);
          }
          if (dependency) {
            dependency.body = body2;
          }
          return body2;
        }
        __name(text2, "text2");
        if (key2 === "text") {
          return text2;
        }
        if (key2 === "json") {
          return async () => {
            return JSON.parse(await text2());
          };
        }
        return Reflect.get(response2, key2, response2);
      }
    });
    if (csr) {
      const get3 = response.headers.get;
      response.headers.get = (key2) => {
        const lower = key2.toLowerCase();
        const value = get3.call(response.headers, lower);
        if (value && !lower.startsWith("x-sveltekit-")) {
          const included = resolve_opts.filterSerializedResponseHeaders(lower, value);
          if (!included) {
            throw new Error(
              `Failed to get response header "${lower}" \u2014 it must be included by the \`filterSerializedResponseHeaders\` option: https://svelte.dev/docs/kit/hooks#Server-hooks-handle (at ${event.route.id})`
            );
          }
        }
        return value;
      };
    }
    return proxy2;
  }, "universal_fetch");
  return (input, init2) => {
    const response = universal_fetch(input, init2);
    response.catch(() => {
    });
    return response;
  };
}
__name(create_universal_fetch, "create_universal_fetch");
async function stream_to_string(stream) {
  let result = "";
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    result += decoder.decode(value);
  }
  return result;
}
__name(stream_to_string, "stream_to_string");
function hash(...values) {
  let hash2 = 5381;
  for (const value of values) {
    if (typeof value === "string") {
      let i = value.length;
      while (i) hash2 = hash2 * 33 ^ value.charCodeAt(--i);
    } else if (ArrayBuffer.isView(value)) {
      const buffer = new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
      let i = buffer.length;
      while (i) hash2 = hash2 * 33 ^ buffer[--i];
    } else {
      throw new TypeError("value must be a string or TypedArray");
    }
  }
  return (hash2 >>> 0).toString(36);
}
__name(hash, "hash");
var replacements2 = {
  "<": "\\u003C",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var pattern = new RegExp(`[${Object.keys(replacements2).join("")}]`, "g");
function serialize_data(fetched, filter, prerendering2 = false) {
  const headers2 = {};
  let cache_control = null;
  let age = null;
  let varyAny = false;
  for (const [key2, value] of fetched.response.headers) {
    if (filter(key2, value)) {
      headers2[key2] = value;
    }
    if (key2 === "cache-control") cache_control = value;
    else if (key2 === "age") age = value;
    else if (key2 === "vary" && value.trim() === "*") varyAny = true;
  }
  const payload = {
    status: fetched.response.status,
    statusText: fetched.response.statusText,
    headers: headers2,
    body: fetched.response_body
  };
  const safe_payload = JSON.stringify(payload).replace(pattern, (match) => replacements2[match]);
  const attrs = [
    'type="application/json"',
    "data-sveltekit-fetched",
    `data-url="${escape_html2(fetched.url, true)}"`
  ];
  if (fetched.is_b64) {
    attrs.push("data-b64");
  }
  if (fetched.request_headers || fetched.request_body) {
    const values = [];
    if (fetched.request_headers) {
      values.push([...new Headers(fetched.request_headers)].join(","));
    }
    if (fetched.request_body) {
      values.push(fetched.request_body);
    }
    attrs.push(`data-hash="${hash(...values)}"`);
  }
  if (!prerendering2 && fetched.method === "GET" && cache_control && !varyAny) {
    const match = /s-maxage=(\d+)/g.exec(cache_control) ?? /max-age=(\d+)/g.exec(cache_control);
    if (match) {
      const ttl = +match[1] - +(age ?? "0");
      attrs.push(`data-ttl="${ttl}"`);
    }
  }
  return `<script ${attrs.join(" ")}>${safe_payload}<\/script>`;
}
__name(serialize_data, "serialize_data");
var s = JSON.stringify;
var encoder$2 = new TextEncoder();
function sha256(data) {
  if (!key[0]) precompute();
  const out = init.slice(0);
  const array2 = encode(data);
  for (let i = 0; i < array2.length; i += 16) {
    const w = array2.subarray(i, i + 16);
    let tmp;
    let a;
    let b;
    let out0 = out[0];
    let out1 = out[1];
    let out2 = out[2];
    let out3 = out[3];
    let out4 = out[4];
    let out5 = out[5];
    let out6 = out[6];
    let out7 = out[7];
    for (let i2 = 0; i2 < 64; i2++) {
      if (i2 < 16) {
        tmp = w[i2];
      } else {
        a = w[i2 + 1 & 15];
        b = w[i2 + 14 & 15];
        tmp = w[i2 & 15] = (a >>> 7 ^ a >>> 18 ^ a >>> 3 ^ a << 25 ^ a << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + w[i2 & 15] + w[i2 + 9 & 15] | 0;
      }
      tmp = tmp + out7 + (out4 >>> 6 ^ out4 >>> 11 ^ out4 >>> 25 ^ out4 << 26 ^ out4 << 21 ^ out4 << 7) + (out6 ^ out4 & (out5 ^ out6)) + key[i2];
      out7 = out6;
      out6 = out5;
      out5 = out4;
      out4 = out3 + tmp | 0;
      out3 = out2;
      out2 = out1;
      out1 = out0;
      out0 = tmp + (out1 & out2 ^ out3 & (out1 ^ out2)) + (out1 >>> 2 ^ out1 >>> 13 ^ out1 >>> 22 ^ out1 << 30 ^ out1 << 19 ^ out1 << 10) | 0;
    }
    out[0] = out[0] + out0 | 0;
    out[1] = out[1] + out1 | 0;
    out[2] = out[2] + out2 | 0;
    out[3] = out[3] + out3 | 0;
    out[4] = out[4] + out4 | 0;
    out[5] = out[5] + out5 | 0;
    out[6] = out[6] + out6 | 0;
    out[7] = out[7] + out7 | 0;
  }
  const bytes = new Uint8Array(out.buffer);
  reverse_endianness(bytes);
  return base64(bytes);
}
__name(sha256, "sha256");
var init = new Uint32Array(8);
var key = new Uint32Array(64);
function precompute() {
  function frac(x) {
    return (x - Math.floor(x)) * 4294967296;
  }
  __name(frac, "frac");
  let prime = 2;
  for (let i = 0; i < 64; prime++) {
    let is_prime = true;
    for (let factor = 2; factor * factor <= prime; factor++) {
      if (prime % factor === 0) {
        is_prime = false;
        break;
      }
    }
    if (is_prime) {
      if (i < 8) {
        init[i] = frac(prime ** (1 / 2));
      }
      key[i] = frac(prime ** (1 / 3));
      i++;
    }
  }
}
__name(precompute, "precompute");
function reverse_endianness(bytes) {
  for (let i = 0; i < bytes.length; i += 4) {
    const a = bytes[i + 0];
    const b = bytes[i + 1];
    const c2 = bytes[i + 2];
    const d = bytes[i + 3];
    bytes[i + 0] = d;
    bytes[i + 1] = c2;
    bytes[i + 2] = b;
    bytes[i + 3] = a;
  }
}
__name(reverse_endianness, "reverse_endianness");
function encode(str) {
  const encoded = encoder$2.encode(str);
  const length = encoded.length * 8;
  const size = 512 * Math.ceil((length + 65) / 512);
  const bytes = new Uint8Array(size / 8);
  bytes.set(encoded);
  bytes[encoded.length] = 128;
  reverse_endianness(bytes);
  const words = new Uint32Array(bytes.buffer);
  words[words.length - 2] = Math.floor(length / 4294967296);
  words[words.length - 1] = length;
  return words;
}
__name(encode, "encode");
var chars2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
function base64(bytes) {
  const l = bytes.length;
  let result = "";
  let i;
  for (i = 2; i < l; i += 3) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars2[(bytes[i - 1] & 15) << 2 | bytes[i] >> 6];
    result += chars2[bytes[i] & 63];
  }
  if (i === l + 1) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4];
    result += "==";
  }
  if (i === l) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars2[(bytes[i - 1] & 15) << 2];
    result += "=";
  }
  return result;
}
__name(base64, "base64");
var array = new Uint8Array(16);
function generate_nonce() {
  crypto.getRandomValues(array);
  return base64(array);
}
__name(generate_nonce, "generate_nonce");
var quoted = /* @__PURE__ */ new Set([
  "self",
  "unsafe-eval",
  "unsafe-hashes",
  "unsafe-inline",
  "none",
  "strict-dynamic",
  "report-sample",
  "wasm-unsafe-eval",
  "script"
]);
var crypto_pattern = /^(nonce|sha\d\d\d)-/;
var BaseProvider = class {
  static {
    __name(this, "BaseProvider");
  }
  /** @type {boolean} */
  #use_hashes;
  /** @type {boolean} */
  #script_needs_csp;
  /** @type {boolean} */
  #script_src_needs_csp;
  /** @type {boolean} */
  #script_src_elem_needs_csp;
  /** @type {boolean} */
  #style_needs_csp;
  /** @type {boolean} */
  #style_src_needs_csp;
  /** @type {boolean} */
  #style_src_attr_needs_csp;
  /** @type {boolean} */
  #style_src_elem_needs_csp;
  /** @type {import('types').CspDirectives} */
  #directives;
  /** @type {import('types').Csp.Source[]} */
  #script_src;
  /** @type {import('types').Csp.Source[]} */
  #script_src_elem;
  /** @type {import('types').Csp.Source[]} */
  #style_src;
  /** @type {import('types').Csp.Source[]} */
  #style_src_attr;
  /** @type {import('types').Csp.Source[]} */
  #style_src_elem;
  /** @type {string} */
  #nonce;
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   */
  constructor(use_hashes, directives, nonce) {
    this.#use_hashes = use_hashes;
    this.#directives = directives;
    const d = this.#directives;
    this.#script_src = [];
    this.#script_src_elem = [];
    this.#style_src = [];
    this.#style_src_attr = [];
    this.#style_src_elem = [];
    const effective_script_src = d["script-src"] || d["default-src"];
    const script_src_elem = d["script-src-elem"];
    const effective_style_src = d["style-src"] || d["default-src"];
    const style_src_attr = d["style-src-attr"];
    const style_src_elem = d["style-src-elem"];
    const needs_csp = /* @__PURE__ */ __name((directive) => !!directive && !directive.some((value) => value === "unsafe-inline"), "needs_csp");
    this.#script_src_needs_csp = needs_csp(effective_script_src);
    this.#script_src_elem_needs_csp = needs_csp(script_src_elem);
    this.#style_src_needs_csp = needs_csp(effective_style_src);
    this.#style_src_attr_needs_csp = needs_csp(style_src_attr);
    this.#style_src_elem_needs_csp = needs_csp(style_src_elem);
    this.#script_needs_csp = this.#script_src_needs_csp || this.#script_src_elem_needs_csp;
    this.#style_needs_csp = this.#style_src_needs_csp || this.#style_src_attr_needs_csp || this.#style_src_elem_needs_csp;
    this.script_needs_nonce = this.#script_needs_csp && !this.#use_hashes;
    this.style_needs_nonce = this.#style_needs_csp && !this.#use_hashes;
    this.#nonce = nonce;
  }
  /** @param {string} content */
  add_script(content) {
    if (!this.#script_needs_csp) return;
    const source2 = this.#use_hashes ? `sha256-${sha256(content)}` : `nonce-${this.#nonce}`;
    if (this.#script_src_needs_csp) {
      this.#script_src.push(source2);
    }
    if (this.#script_src_elem_needs_csp) {
      this.#script_src_elem.push(source2);
    }
  }
  /** @param {string} content */
  add_style(content) {
    if (!this.#style_needs_csp) return;
    const source2 = this.#use_hashes ? `sha256-${sha256(content)}` : `nonce-${this.#nonce}`;
    if (this.#style_src_needs_csp) {
      this.#style_src.push(source2);
    }
    if (this.#style_src_attr_needs_csp) {
      this.#style_src_attr.push(source2);
    }
    if (this.#style_src_elem_needs_csp) {
      const sha256_empty_comment_hash = "sha256-9OlNO0DNEeaVzHL4RZwCLsBHA8WBQ8toBp/4F5XV2nc=";
      const d = this.#directives;
      if (d["style-src-elem"] && !d["style-src-elem"].includes(sha256_empty_comment_hash) && !this.#style_src_elem.includes(sha256_empty_comment_hash)) {
        this.#style_src_elem.push(sha256_empty_comment_hash);
      }
      if (source2 !== sha256_empty_comment_hash) {
        this.#style_src_elem.push(source2);
      }
    }
  }
  /**
   * @param {boolean} [is_meta]
   */
  get_header(is_meta = false) {
    const header = [];
    const directives = { ...this.#directives };
    if (this.#style_src.length > 0) {
      directives["style-src"] = [
        ...directives["style-src"] || directives["default-src"] || [],
        ...this.#style_src
      ];
    }
    if (this.#style_src_attr.length > 0) {
      directives["style-src-attr"] = [
        ...directives["style-src-attr"] || [],
        ...this.#style_src_attr
      ];
    }
    if (this.#style_src_elem.length > 0) {
      directives["style-src-elem"] = [
        ...directives["style-src-elem"] || [],
        ...this.#style_src_elem
      ];
    }
    if (this.#script_src.length > 0) {
      directives["script-src"] = [
        ...directives["script-src"] || directives["default-src"] || [],
        ...this.#script_src
      ];
    }
    if (this.#script_src_elem.length > 0) {
      directives["script-src-elem"] = [
        ...directives["script-src-elem"] || [],
        ...this.#script_src_elem
      ];
    }
    for (const key2 in directives) {
      if (is_meta && (key2 === "frame-ancestors" || key2 === "report-uri" || key2 === "sandbox")) {
        continue;
      }
      const value = (
        /** @type {string[] | true} */
        directives[key2]
      );
      if (!value) continue;
      const directive = [key2];
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          if (quoted.has(value2) || crypto_pattern.test(value2)) {
            directive.push(`'${value2}'`);
          } else {
            directive.push(value2);
          }
        });
      }
      header.push(directive.join(" "));
    }
    return header.join("; ");
  }
};
var CspProvider = class extends BaseProvider {
  static {
    __name(this, "CspProvider");
  }
  get_meta() {
    const content = this.get_header(true);
    if (!content) {
      return;
    }
    return `<meta http-equiv="content-security-policy" content="${escape_html2(content, true)}">`;
  }
};
var CspReportOnlyProvider = class extends BaseProvider {
  static {
    __name(this, "CspReportOnlyProvider");
  }
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   */
  constructor(use_hashes, directives, nonce) {
    super(use_hashes, directives, nonce);
    if (Object.values(directives).filter((v) => !!v).length > 0) {
      const has_report_to = directives["report-to"]?.length ?? 0 > 0;
      const has_report_uri = directives["report-uri"]?.length ?? 0 > 0;
      if (!has_report_to && !has_report_uri) {
        throw Error(
          "`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both"
        );
      }
    }
  }
};
var Csp = class {
  static {
    __name(this, "Csp");
  }
  /** @readonly */
  nonce = generate_nonce();
  /** @type {CspProvider} */
  csp_provider;
  /** @type {CspReportOnlyProvider} */
  report_only_provider;
  /**
   * @param {import('./types.js').CspConfig} config
   * @param {import('./types.js').CspOpts} opts
   */
  constructor({ mode, directives, reportOnly }, { prerender }) {
    const use_hashes = mode === "hash" || mode === "auto" && prerender;
    this.csp_provider = new CspProvider(use_hashes, directives, this.nonce);
    this.report_only_provider = new CspReportOnlyProvider(use_hashes, reportOnly, this.nonce);
  }
  get script_needs_nonce() {
    return this.csp_provider.script_needs_nonce || this.report_only_provider.script_needs_nonce;
  }
  get style_needs_nonce() {
    return this.csp_provider.style_needs_nonce || this.report_only_provider.style_needs_nonce;
  }
  /** @param {string} content */
  add_script(content) {
    this.csp_provider.add_script(content);
    this.report_only_provider.add_script(content);
  }
  /** @param {string} content */
  add_style(content) {
    this.csp_provider.add_style(content);
    this.report_only_provider.add_style(content);
  }
};
function defer() {
  let fulfil;
  let reject;
  const promise = new Promise((f, r3) => {
    fulfil = f;
    reject = r3;
  });
  return { promise, fulfil, reject };
}
__name(defer, "defer");
function create_async_iterator() {
  const deferred = [defer()];
  return {
    iterator: {
      [Symbol.asyncIterator]() {
        return {
          next: /* @__PURE__ */ __name(async () => {
            const next = await deferred[0].promise;
            if (!next.done) deferred.shift();
            return next;
          }, "next")
        };
      }
    },
    push: /* @__PURE__ */ __name((value) => {
      deferred[deferred.length - 1].fulfil({
        value,
        done: false
      });
      deferred.push(defer());
    }, "push"),
    done: /* @__PURE__ */ __name(() => {
      deferred[deferred.length - 1].fulfil({ done: true });
    }, "done")
  };
}
__name(create_async_iterator, "create_async_iterator");
function exec(match, params, matchers) {
  const result = {};
  const values = match.slice(1);
  const values_needing_match = values.filter((value) => value !== void 0);
  let buffered = 0;
  for (let i = 0; i < params.length; i += 1) {
    const param = params[i];
    let value = values[i - buffered];
    if (param.chained && param.rest && buffered) {
      value = values.slice(i - buffered, i + 1).filter((s22) => s22).join("/");
      buffered = 0;
    }
    if (value === void 0) {
      if (param.rest) result[param.name] = "";
      continue;
    }
    if (!param.matcher || matchers[param.matcher](value)) {
      result[param.name] = value;
      const next_param = params[i + 1];
      const next_value = values[i + 1];
      if (next_param && !next_param.rest && next_param.optional && next_value && param.chained) {
        buffered = 0;
      }
      if (!next_param && !next_value && Object.keys(result).length === values_needing_match.length) {
        buffered = 0;
      }
      continue;
    }
    if (param.optional && param.chained) {
      buffered++;
      continue;
    }
    return;
  }
  if (buffered) return;
  return result;
}
__name(exec, "exec");
function generate_route_object(route, url, manifest2) {
  const { errors, layouts, leaf } = route;
  const nodes = [...errors, ...layouts.map((l) => l?.[1]), leaf[1]].filter((n2) => typeof n2 === "number").map((n2) => `'${n2}': () => ${create_client_import(manifest2._.client.nodes?.[n2], url)}`).join(",\n		");
  return [
    `{
	id: ${s(route.id)}`,
    `errors: ${s(route.errors)}`,
    `layouts: ${s(route.layouts)}`,
    `leaf: ${s(route.leaf)}`,
    `nodes: {
		${nodes}
	}
}`
  ].join(",\n	");
}
__name(generate_route_object, "generate_route_object");
function create_client_import(import_path, url) {
  if (!import_path) return "Promise.resolve({})";
  if (import_path[0] === "/") {
    return `import('${import_path}')`;
  }
  if (assets !== "") {
    return `import('${assets}/${import_path}')`;
  }
  let path = get_relative_path(url.pathname, `${base}/${import_path}`);
  if (path[0] !== ".") path = `./${path}`;
  return `import('${path}')`;
}
__name(create_client_import, "create_client_import");
async function resolve_route(resolved_path, url, manifest2) {
  if (!manifest2._.client.routes) {
    return text("Server-side route resolution disabled", { status: 400 });
  }
  let route = null;
  let params = {};
  const matchers = await manifest2._.matchers();
  for (const candidate of manifest2._.client.routes) {
    const match = candidate.pattern.exec(resolved_path);
    if (!match) continue;
    const matched = exec(match, candidate.params, matchers);
    if (matched) {
      route = candidate;
      params = decode_params(matched);
      break;
    }
  }
  return create_server_routing_response(route, params, url, manifest2).response;
}
__name(resolve_route, "resolve_route");
function create_server_routing_response(route, params, url, manifest2) {
  const headers2 = new Headers({
    "content-type": "application/javascript; charset=utf-8"
  });
  if (route) {
    const csr_route = generate_route_object(route, url, manifest2);
    const body2 = `${create_css_import(route, url, manifest2)}
export const route = ${csr_route}; export const params = ${JSON.stringify(params)};`;
    return { response: text(body2, { headers: headers2 }), body: body2 };
  } else {
    return { response: text("", { headers: headers2 }), body: "" };
  }
}
__name(create_server_routing_response, "create_server_routing_response");
function create_css_import(route, url, manifest2) {
  const { errors, layouts, leaf } = route;
  let css = "";
  for (const node of [...errors, ...layouts.map((l) => l?.[1]), leaf[1]]) {
    if (typeof node !== "number") continue;
    const node_css = manifest2._.client.css?.[node];
    for (const css_path of node_css ?? []) {
      css += `'${assets || base}/${css_path}',`;
    }
  }
  if (!css) return "";
  return `${create_client_import(
    /** @type {string} */
    manifest2._.client.start,
    url
  )}.then(x => x.load_css([${css}]));`;
}
__name(create_css_import, "create_css_import");
var updated = {
  ...readable(false),
  check: /* @__PURE__ */ __name(() => false, "check")
};
var encoder$1 = new TextEncoder();
async function render_response({
  branch: branch2,
  fetched,
  options: options2,
  manifest: manifest2,
  state: state2,
  page_config,
  status,
  error: error2 = null,
  event,
  resolve_opts,
  action_result
}) {
  if (state2.prerendering) {
    if (options2.csp.mode === "nonce") {
      throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');
    }
    if (options2.app_template_contains_nonce) {
      throw new Error("Cannot use prerendering if page template contains %sveltekit.nonce%");
    }
  }
  const { client } = manifest2._;
  const modulepreloads = new Set(client.imports);
  const stylesheets31 = new Set(client.stylesheets);
  const fonts31 = new Set(client.fonts);
  const link_header_preloads = /* @__PURE__ */ new Set();
  const inline_styles = /* @__PURE__ */ new Map();
  let rendered;
  const form_value = action_result?.type === "success" || action_result?.type === "failure" ? action_result.data ?? null : null;
  let base$1 = base;
  let assets$1 = assets;
  let base_expression = s(base);
  {
    if (!state2.prerendering?.fallback) {
      const segments = event.url.pathname.slice(base.length).split("/").slice(2);
      base$1 = segments.map(() => "..").join("/") || ".";
      base_expression = `new URL(${s(base$1)}, location).pathname.slice(0, -1)`;
      if (!assets || assets[0] === "/" && assets !== SVELTE_KIT_ASSETS) {
        assets$1 = base$1;
      }
    } else if (options2.hash_routing) {
      base_expression = "new URL('.', location).pathname.slice(0, -1)";
    }
  }
  if (page_config.ssr) {
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        updated
      },
      constructors: await Promise.all(
        branch2.map(({ node }) => {
          if (!node.component) {
            throw new Error(`Missing +page.svelte component for route ${event.route.id}`);
          }
          return node.component();
        })
      ),
      form: form_value
    };
    let data2 = {};
    for (let i = 0; i < branch2.length; i += 1) {
      data2 = { ...data2, ...branch2[i].data };
      props[`data_${i}`] = data2;
    }
    props.page = {
      error: error2,
      params: (
        /** @type {Record<string, any>} */
        event.params
      ),
      route: event.route,
      status,
      url: event.url,
      data: data2,
      form: form_value,
      state: {}
    };
    override({ base: base$1, assets: assets$1 });
    const render_opts = {
      context: /* @__PURE__ */ new Map([
        [
          "__request__",
          {
            page: props.page
          }
        ]
      ])
    };
    {
      try {
        rendered = options2.root.render(props, render_opts);
      } finally {
        reset();
      }
    }
    for (const { node } of branch2) {
      for (const url of node.imports) modulepreloads.add(url);
      for (const url of node.stylesheets) stylesheets31.add(url);
      for (const url of node.fonts) fonts31.add(url);
      if (node.inline_styles && !client.inline) {
        Object.entries(await node.inline_styles()).forEach(([k, v]) => inline_styles.set(k, v));
      }
    }
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  let head = "";
  let body2 = rendered.html;
  const csp = new Csp(options2.csp, {
    prerender: !!state2.prerendering
  });
  const prefixed = /* @__PURE__ */ __name((path) => {
    if (path.startsWith("/")) {
      return base + path;
    }
    return `${assets$1}/${path}`;
  }, "prefixed");
  const style = client.inline ? client.inline?.style : Array.from(inline_styles.values()).join("\n");
  if (style) {
    const attributes = [];
    if (csp.style_needs_nonce) attributes.push(` nonce="${csp.nonce}"`);
    csp.add_style(style);
    head += `
	<style${attributes.join("")}>${style}</style>`;
  }
  for (const dep of stylesheets31) {
    const path = prefixed(dep);
    const attributes = ['rel="stylesheet"'];
    if (inline_styles.has(dep)) {
      attributes.push("disabled", 'media="(max-width: 0)"');
    } else {
      if (resolve_opts.preload({ type: "css", path })) {
        const preload_atts = ['rel="preload"', 'as="style"'];
        link_header_preloads.add(`<${encodeURI(path)}>; ${preload_atts.join(";")}; nopush`);
      }
    }
    head += `
		<link href="${path}" ${attributes.join(" ")}>`;
  }
  for (const dep of fonts31) {
    const path = prefixed(dep);
    if (resolve_opts.preload({ type: "font", path })) {
      const ext = dep.slice(dep.lastIndexOf(".") + 1);
      const attributes = [
        'rel="preload"',
        'as="font"',
        `type="font/${ext}"`,
        `href="${path}"`,
        "crossorigin"
      ];
      head += `
		<link ${attributes.join(" ")}>`;
    }
  }
  const global = `__sveltekit_${options2.version_hash}`;
  const { data, chunks } = get_data(
    event,
    options2,
    branch2.map((b) => b.server_data),
    csp,
    global
  );
  if (page_config.ssr && page_config.csr) {
    body2 += `
			${fetched.map(
      (item) => serialize_data(item, resolve_opts.filterSerializedResponseHeaders, !!state2.prerendering)
    ).join("\n			")}`;
  }
  if (page_config.csr) {
    const route = manifest2._.client.routes?.find((r3) => r3.id === event.route.id) ?? null;
    if (client.uses_env_dynamic_public && state2.prerendering) {
      modulepreloads.add(`${app_dir}/env.js`);
    }
    if (!client.inline) {
      const included_modulepreloads = Array.from(modulepreloads, (dep) => prefixed(dep)).filter(
        (path) => resolve_opts.preload({ type: "js", path })
      );
      for (const path of included_modulepreloads) {
        link_header_preloads.add(`<${encodeURI(path)}>; rel="modulepreload"; nopush`);
        if (options2.preload_strategy !== "modulepreload") {
          head += `
		<link rel="preload" as="script" crossorigin="anonymous" href="${path}">`;
        } else if (state2.prerendering) {
          head += `
		<link rel="modulepreload" href="${path}">`;
        }
      }
    }
    if (manifest2._.client.routes && state2.prerendering && !state2.prerendering.fallback) {
      const pathname = add_resolution_suffix(event.url.pathname);
      state2.prerendering.dependencies.set(
        pathname,
        create_server_routing_response(route, event.params, new URL(pathname, event.url), manifest2)
      );
    }
    const blocks = [];
    const load_env_eagerly = client.uses_env_dynamic_public && state2.prerendering;
    const properties = [`base: ${base_expression}`];
    if (assets) {
      properties.push(`assets: ${s(assets)}`);
    }
    if (client.uses_env_dynamic_public) {
      properties.push(`env: ${load_env_eagerly ? "null" : s(public_env)}`);
    }
    if (chunks) {
      blocks.push("const deferred = new Map();");
      properties.push(`defer: (id) => new Promise((fulfil, reject) => {
							deferred.set(id, { fulfil, reject });
						})`);
      properties.push(`resolve: ({ id, data, error }) => {
							const try_to_resolve = () => {
								if (!deferred.has(id)) {
									setTimeout(try_to_resolve, 0);
									return;
								}
								const { fulfil, reject } = deferred.get(id);
								deferred.delete(id);
								if (error) reject(error);
								else fulfil(data);
							}
							try_to_resolve();
						}`);
    }
    blocks.push(`${global} = {
						${properties.join(",\n						")}
					};`);
    const args = ["element"];
    blocks.push("const element = document.currentScript.parentElement;");
    if (page_config.ssr) {
      const serialized = { form: "null", error: "null" };
      if (form_value) {
        serialized.form = uneval_action_response(
          form_value,
          /** @type {string} */
          event.route.id,
          options2.hooks.transport
        );
      }
      if (error2) {
        serialized.error = uneval(error2);
      }
      const hydrate2 = [
        `node_ids: [${branch2.map(({ node }) => node.index).join(", ")}]`,
        `data: ${data}`,
        `form: ${serialized.form}`,
        `error: ${serialized.error}`
      ];
      if (status !== 200) {
        hydrate2.push(`status: ${status}`);
      }
      if (manifest2._.client.routes) {
        if (route) {
          const stringified = generate_route_object(route, event.url, manifest2).replaceAll(
            "\n",
            "\n							"
          );
          hydrate2.push(`params: ${uneval(event.params)}`, `server_route: ${stringified}`);
        }
      } else if (options2.embedded) {
        hydrate2.push(`params: ${uneval(event.params)}`, `route: ${s(event.route)}`);
      }
      const indent = "	".repeat(load_env_eagerly ? 7 : 6);
      args.push(`{
${indent}	${hydrate2.join(`,
${indent}	`)}
${indent}}`);
    }
    const boot = client.inline ? `${client.inline.script}

					__sveltekit_${options2.version_hash}.app.start(${args.join(", ")});` : client.app ? `Promise.all([
						import(${s(prefixed(client.start))}),
						import(${s(prefixed(client.app))})
					]).then(([kit, app]) => {
						kit.start(app, ${args.join(", ")});
					});` : `import(${s(prefixed(client.start))}).then((app) => {
						app.start(${args.join(", ")})
					});`;
    if (load_env_eagerly) {
      blocks.push(`import(${s(`${base$1}/${app_dir}/env.js`)}).then(({ env }) => {
						${global}.env = env;

						${boot.replace(/\n/g, "\n	")}
					});`);
    } else {
      blocks.push(boot);
    }
    if (options2.service_worker) {
      const opts = "";
      blocks.push(`if ('serviceWorker' in navigator) {
						addEventListener('load', function () {
							navigator.serviceWorker.register('${prefixed("service-worker.js")}'${opts});
						});
					}`);
    }
    const init_app = `
				{
					${blocks.join("\n\n					")}
				}
			`;
    csp.add_script(init_app);
    body2 += `
			<script${csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : ""}>${init_app}<\/script>
		`;
  }
  const headers2 = new Headers({
    "x-sveltekit-page": "true",
    "content-type": "text/html"
  });
  if (state2.prerendering) {
    const http_equiv = [];
    const csp_headers = csp.csp_provider.get_meta();
    if (csp_headers) {
      http_equiv.push(csp_headers);
    }
    if (state2.prerendering.cache) {
      http_equiv.push(`<meta http-equiv="cache-control" content="${state2.prerendering.cache}">`);
    }
    if (http_equiv.length > 0) {
      head = http_equiv.join("\n") + head;
    }
  } else {
    const csp_header = csp.csp_provider.get_header();
    if (csp_header) {
      headers2.set("content-security-policy", csp_header);
    }
    const report_only_header = csp.report_only_provider.get_header();
    if (report_only_header) {
      headers2.set("content-security-policy-report-only", report_only_header);
    }
    if (link_header_preloads.size) {
      headers2.set("link", Array.from(link_header_preloads).join(", "));
    }
  }
  head += rendered.head;
  const html = options2.templates.app({
    head,
    body: body2,
    assets: assets$1,
    nonce: (
      /** @type {string} */
      csp.nonce
    ),
    env: safe_public_env
  });
  const transformed = await resolve_opts.transformPageChunk({
    html,
    done: true
  }) || "";
  if (!chunks) {
    headers2.set("etag", `"${hash(transformed)}"`);
  }
  return !chunks ? text(transformed, {
    status,
    headers: headers2
  }) : new Response(
    new ReadableStream({
      async start(controller) {
        controller.enqueue(encoder$1.encode(transformed + "\n"));
        for await (const chunk of chunks) {
          controller.enqueue(encoder$1.encode(chunk));
        }
        controller.close();
      },
      type: "bytes"
    }),
    {
      headers: headers2
    }
  );
}
__name(render_response, "render_response");
function get_data(event, options2, nodes, csp, global) {
  let promise_id = 1;
  let count = 0;
  const { iterator, push: push2, done } = create_async_iterator();
  function replacer(thing) {
    if (typeof thing?.then === "function") {
      const id = promise_id++;
      count += 1;
      thing.then(
        /** @param {any} data */
        (data) => ({ data })
      ).catch(
        /** @param {any} error */
        async (error2) => ({
          error: await handle_error_and_jsonify(event, options2, error2)
        })
      ).then(
        /**
         * @param {{data: any; error: any}} result
         */
        async ({ data, error: error2 }) => {
          count -= 1;
          let str;
          try {
            str = uneval({ id, data, error: error2 }, replacer);
          } catch {
            error2 = await handle_error_and_jsonify(
              event,
              options2,
              new Error(`Failed to serialize promise while rendering ${event.route.id}`)
            );
            data = void 0;
            str = uneval({ id, data, error: error2 }, replacer);
          }
          const nonce = csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : "";
          push2(`<script${nonce}>${global}.resolve(${str})<\/script>
`);
          if (count === 0) done();
        }
      );
      return `${global}.defer(${id})`;
    } else {
      for (const key2 in options2.hooks.transport) {
        const encoded = options2.hooks.transport[key2].encode(thing);
        if (encoded) {
          return `app.decode('${key2}', ${uneval(encoded, replacer)})`;
        }
      }
    }
  }
  __name(replacer, "replacer");
  try {
    const strings = nodes.map((node) => {
      if (!node) return "null";
      const payload = { type: "data", data: node.data, uses: serialize_uses(node) };
      if (node.slash) payload.slash = node.slash;
      return uneval(payload, replacer);
    });
    return {
      data: `[${strings.join(",")}]`,
      chunks: count > 0 ? iterator : null
    };
  } catch (e3) {
    e3.path = e3.path.slice(1);
    throw new Error(clarify_devalue_error(
      event,
      /** @type {any} */
      e3
    ));
  }
}
__name(get_data, "get_data");
var PageNodes = class {
  static {
    __name(this, "PageNodes");
  }
  data;
  /**
   * @param {Array<import('types').SSRNode | undefined>} nodes
   */
  constructor(nodes) {
    this.data = nodes;
  }
  layouts() {
    return this.data.slice(0, -1);
  }
  page() {
    return this.data.at(-1);
  }
  validate() {
    for (const layout of this.layouts()) {
      if (layout) {
        validate_layout_server_exports(
          layout.server,
          /** @type {string} */
          layout.server_id
        );
        validate_layout_exports(
          layout.universal,
          /** @type {string} */
          layout.universal_id
        );
      }
    }
    const page3 = this.page();
    if (page3) {
      validate_page_server_exports(
        page3.server,
        /** @type {string} */
        page3.server_id
      );
      validate_page_exports(
        page3.universal,
        /** @type {string} */
        page3.universal_id
      );
    }
  }
  /**
   * @template {'prerender' | 'ssr' | 'csr' | 'trailingSlash'} Option
   * @param {Option} option
   * @returns {Value | undefined}
   */
  #get_option(option) {
    return this.data.reduce(
      (value, node) => {
        return node?.universal?.[option] ?? node?.server?.[option] ?? value;
      },
      /** @type {Value | undefined} */
      void 0
    );
  }
  csr() {
    return this.#get_option("csr") ?? true;
  }
  ssr() {
    return this.#get_option("ssr") ?? true;
  }
  prerender() {
    return this.#get_option("prerender") ?? false;
  }
  trailing_slash() {
    return this.#get_option("trailingSlash") ?? "never";
  }
  get_config() {
    let current = {};
    for (const node of this.data) {
      if (!node?.universal?.config && !node?.server?.config) continue;
      current = {
        ...current,
        // TODO: should we override the server config value with the universal value similar to other page options?
        ...node?.universal?.config,
        ...node?.server?.config
      };
    }
    return Object.keys(current).length ? current : void 0;
  }
  should_prerender_data() {
    return this.data.some(
      // prerender in case of trailingSlash because the client retrieves that value from the server
      (node) => node?.server?.load || node?.server?.trailingSlash !== void 0
    );
  }
};
async function respond_with_error({
  event,
  options: options2,
  manifest: manifest2,
  state: state2,
  status,
  error: error2,
  resolve_opts
}) {
  if (event.request.headers.get("x-sveltekit-error")) {
    return static_error_page(
      options2,
      status,
      /** @type {Error} */
      error2.message
    );
  }
  const fetched = [];
  try {
    const branch2 = [];
    const default_layout = await manifest2._.nodes[0]();
    const nodes = new PageNodes([default_layout]);
    const ssr = nodes.ssr();
    const csr = nodes.csr();
    if (ssr) {
      state2.error = true;
      const server_data_promise = load_server_data({
        event,
        state: state2,
        node: default_layout,
        // eslint-disable-next-line @typescript-eslint/require-await
        parent: /* @__PURE__ */ __name(async () => ({}), "parent")
      });
      const server_data = await server_data_promise;
      const data = await load_data({
        event,
        fetched,
        node: default_layout,
        // eslint-disable-next-line @typescript-eslint/require-await
        parent: /* @__PURE__ */ __name(async () => ({}), "parent"),
        resolve_opts,
        server_data_promise,
        state: state2,
        csr
      });
      branch2.push(
        {
          node: default_layout,
          server_data,
          data
        },
        {
          node: await manifest2._.nodes[1](),
          // 1 is always the root error
          data: null,
          server_data: null
        }
      );
    }
    return await render_response({
      options: options2,
      manifest: manifest2,
      state: state2,
      page_config: {
        ssr,
        csr
      },
      status,
      error: await handle_error_and_jsonify(event, options2, error2),
      branch: branch2,
      fetched,
      event,
      resolve_opts
    });
  } catch (e3) {
    if (e3 instanceof Redirect) {
      return redirect_response(e3.status, e3.location);
    }
    return static_error_page(
      options2,
      get_status(e3),
      (await handle_error_and_jsonify(event, options2, e3)).message
    );
  }
}
__name(respond_with_error, "respond_with_error");
function once(fn) {
  let done = false;
  let result;
  return () => {
    if (done) return result;
    done = true;
    return result = fn();
  };
}
__name(once, "once");
var encoder2 = new TextEncoder();
async function render_data(event, route, options2, manifest2, state2, invalidated_data_nodes, trailing_slash) {
  if (!route.page) {
    return new Response(void 0, {
      status: 404
    });
  }
  try {
    const node_ids = [...route.page.layouts, route.page.leaf];
    const invalidated = invalidated_data_nodes ?? node_ids.map(() => true);
    let aborted = false;
    const url = new URL(event.url);
    url.pathname = normalize_path(url.pathname, trailing_slash);
    const new_event = { ...event, url };
    const functions = node_ids.map((n2, i) => {
      return once(async () => {
        try {
          if (aborted) {
            return (
              /** @type {import('types').ServerDataSkippedNode} */
              {
                type: "skip"
              }
            );
          }
          const node = n2 == void 0 ? n2 : await manifest2._.nodes[n2]();
          return load_server_data({
            event: new_event,
            state: state2,
            node,
            parent: /* @__PURE__ */ __name(async () => {
              const data2 = {};
              for (let j = 0; j < i; j += 1) {
                const parent = (
                  /** @type {import('types').ServerDataNode | null} */
                  await functions[j]()
                );
                if (parent) {
                  Object.assign(data2, parent.data);
                }
              }
              return data2;
            }, "parent")
          });
        } catch (e3) {
          aborted = true;
          throw e3;
        }
      });
    });
    const promises = functions.map(async (fn, i) => {
      if (!invalidated[i]) {
        return (
          /** @type {import('types').ServerDataSkippedNode} */
          {
            type: "skip"
          }
        );
      }
      return fn();
    });
    let length = promises.length;
    const nodes = await Promise.all(
      promises.map(
        (p, i) => p.catch(async (error2) => {
          if (error2 instanceof Redirect) {
            throw error2;
          }
          length = Math.min(length, i + 1);
          return (
            /** @type {import('types').ServerErrorNode} */
            {
              type: "error",
              error: await handle_error_and_jsonify(event, options2, error2),
              status: error2 instanceof HttpError || error2 instanceof SvelteKitError ? error2.status : void 0
            }
          );
        })
      )
    );
    const { data, chunks } = get_data_json(event, options2, nodes);
    if (!chunks) {
      return json_response(data);
    }
    return new Response(
      new ReadableStream({
        async start(controller) {
          controller.enqueue(encoder2.encode(data));
          for await (const chunk of chunks) {
            controller.enqueue(encoder2.encode(chunk));
          }
          controller.close();
        },
        type: "bytes"
      }),
      {
        headers: {
          // we use a proprietary content type to prevent buffering.
          // the `text` prefix makes it inspectable
          "content-type": "text/sveltekit-data",
          "cache-control": "private, no-store"
        }
      }
    );
  } catch (e3) {
    const error2 = normalize_error(e3);
    if (error2 instanceof Redirect) {
      return redirect_json_response(error2);
    } else {
      return json_response(await handle_error_and_jsonify(event, options2, error2), 500);
    }
  }
}
__name(render_data, "render_data");
function json_response(json2, status = 200) {
  return text(typeof json2 === "string" ? json2 : JSON.stringify(json2), {
    status,
    headers: {
      "content-type": "application/json",
      "cache-control": "private, no-store"
    }
  });
}
__name(json_response, "json_response");
function redirect_json_response(redirect2) {
  return json_response({
    type: "redirect",
    location: redirect2.location
  });
}
__name(redirect_json_response, "redirect_json_response");
function get_data_json(event, options2, nodes) {
  let promise_id = 1;
  let count = 0;
  const { iterator, push: push2, done } = create_async_iterator();
  const reducers = {
    ...Object.fromEntries(
      Object.entries(options2.hooks.transport).map(([key2, value]) => [key2, value.encode])
    ),
    /** @param {any} thing */
    Promise: /* @__PURE__ */ __name((thing) => {
      if (typeof thing?.then === "function") {
        const id = promise_id++;
        count += 1;
        let key2 = "data";
        thing.catch(
          /** @param {any} e */
          async (e3) => {
            key2 = "error";
            return handle_error_and_jsonify(
              event,
              options2,
              /** @type {any} */
              e3
            );
          }
        ).then(
          /** @param {any} value */
          async (value) => {
            let str;
            try {
              str = stringify2(value, reducers);
            } catch {
              const error2 = await handle_error_and_jsonify(
                event,
                options2,
                new Error(`Failed to serialize promise while rendering ${event.route.id}`)
              );
              key2 = "error";
              str = stringify2(error2, reducers);
            }
            count -= 1;
            push2(`{"type":"chunk","id":${id},"${key2}":${str}}
`);
            if (count === 0) done();
          }
        );
        return id;
      }
    }, "Promise")
  };
  try {
    const strings = nodes.map((node) => {
      if (!node) return "null";
      if (node.type === "error" || node.type === "skip") {
        return JSON.stringify(node);
      }
      return `{"type":"data","data":${stringify2(node.data, reducers)},"uses":${JSON.stringify(
        serialize_uses(node)
      )}${node.slash ? `,"slash":${JSON.stringify(node.slash)}` : ""}}`;
    });
    return {
      data: `{"type":"data","nodes":[${strings.join(",")}]}
`,
      chunks: count > 0 ? iterator : null
    };
  } catch (e3) {
    e3.path = "data" + e3.path;
    throw new Error(clarify_devalue_error(
      event,
      /** @type {any} */
      e3
    ));
  }
}
__name(get_data_json, "get_data_json");
var MAX_DEPTH = 10;
async function render_page(event, page3, options2, manifest2, state2, nodes, resolve_opts) {
  if (state2.depth > MAX_DEPTH) {
    return text(`Not found: ${event.url.pathname}`, {
      status: 404
      // TODO in some cases this should be 500. not sure how to differentiate
    });
  }
  if (is_action_json_request(event)) {
    const node = await manifest2._.nodes[page3.leaf]();
    return handle_action_json_request(event, options2, node?.server);
  }
  try {
    const leaf_node = (
      /** @type {import('types').SSRNode} */
      nodes.page()
    );
    let status = 200;
    let action_result = void 0;
    if (is_action_request(event)) {
      action_result = await handle_action_request(event, leaf_node.server);
      if (action_result?.type === "redirect") {
        return redirect_response(action_result.status, action_result.location);
      }
      if (action_result?.type === "error") {
        status = get_status(action_result.error);
      }
      if (action_result?.type === "failure") {
        status = action_result.status;
      }
    }
    const should_prerender = nodes.prerender();
    if (should_prerender) {
      const mod = leaf_node.server;
      if (mod?.actions) {
        throw new Error("Cannot prerender pages with actions");
      }
    } else if (state2.prerendering) {
      return new Response(void 0, {
        status: 204
      });
    }
    state2.prerender_default = should_prerender;
    const should_prerender_data = nodes.should_prerender_data();
    const data_pathname = add_data_suffix(event.url.pathname);
    const fetched = [];
    const ssr = nodes.ssr();
    const csr = nodes.csr();
    if (ssr === false && !(state2.prerendering && should_prerender_data)) {
      if (DEV && action_result && !event.request.headers.has("x-sveltekit-action")) ;
      return await render_response({
        branch: [],
        fetched,
        page_config: {
          ssr: false,
          csr
        },
        status,
        error: null,
        event,
        options: options2,
        manifest: manifest2,
        state: state2,
        resolve_opts
      });
    }
    const branch2 = [];
    let load_error = null;
    const server_promises = nodes.data.map((node, i) => {
      if (load_error) {
        throw load_error;
      }
      return Promise.resolve().then(async () => {
        try {
          if (node === leaf_node && action_result?.type === "error") {
            throw action_result.error;
          }
          return await load_server_data({
            event,
            state: state2,
            node,
            parent: /* @__PURE__ */ __name(async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                const parent = await server_promises[j];
                if (parent) Object.assign(data, parent.data);
              }
              return data;
            }, "parent")
          });
        } catch (e3) {
          load_error = /** @type {Error} */
          e3;
          throw load_error;
        }
      });
    });
    const load_promises = nodes.data.map((node, i) => {
      if (load_error) throw load_error;
      return Promise.resolve().then(async () => {
        try {
          return await load_data({
            event,
            fetched,
            node,
            parent: /* @__PURE__ */ __name(async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                Object.assign(data, await load_promises[j]);
              }
              return data;
            }, "parent"),
            resolve_opts,
            server_data_promise: server_promises[i],
            state: state2,
            csr
          });
        } catch (e3) {
          load_error = /** @type {Error} */
          e3;
          throw load_error;
        }
      });
    });
    for (const p of server_promises) p.catch(() => {
    });
    for (const p of load_promises) p.catch(() => {
    });
    for (let i = 0; i < nodes.data.length; i += 1) {
      const node = nodes.data[i];
      if (node) {
        try {
          const server_data = await server_promises[i];
          const data = await load_promises[i];
          branch2.push({ node, server_data, data });
        } catch (e3) {
          const err = normalize_error(e3);
          if (err instanceof Redirect) {
            if (state2.prerendering && should_prerender_data) {
              const body2 = JSON.stringify({
                type: "redirect",
                location: err.location
              });
              state2.prerendering.dependencies.set(data_pathname, {
                response: text(body2),
                body: body2
              });
            }
            return redirect_response(err.status, err.location);
          }
          const status2 = get_status(err);
          const error2 = await handle_error_and_jsonify(event, options2, err);
          while (i--) {
            if (page3.errors[i]) {
              const index31 = (
                /** @type {number} */
                page3.errors[i]
              );
              const node2 = await manifest2._.nodes[index31]();
              let j = i;
              while (!branch2[j]) j -= 1;
              const layouts = compact(branch2.slice(0, j + 1));
              const nodes2 = new PageNodes(layouts.map((layout) => layout.node));
              return await render_response({
                event,
                options: options2,
                manifest: manifest2,
                state: state2,
                resolve_opts,
                page_config: {
                  ssr: nodes2.ssr(),
                  csr: nodes2.csr()
                },
                status: status2,
                error: error2,
                branch: layouts.concat({
                  node: node2,
                  data: null,
                  server_data: null
                }),
                fetched
              });
            }
          }
          return static_error_page(options2, status2, error2.message);
        }
      } else {
        branch2.push(null);
      }
    }
    if (state2.prerendering && should_prerender_data) {
      let { data, chunks } = get_data_json(
        event,
        options2,
        branch2.map((node) => node?.server_data)
      );
      if (chunks) {
        for await (const chunk of chunks) {
          data += chunk;
        }
      }
      state2.prerendering.dependencies.set(data_pathname, {
        response: text(data),
        body: data
      });
    }
    return await render_response({
      event,
      options: options2,
      manifest: manifest2,
      state: state2,
      resolve_opts,
      page_config: {
        csr,
        ssr
      },
      status,
      error: null,
      branch: ssr === false ? [] : compact(branch2),
      action_result,
      fetched
    });
  } catch (e3) {
    return await respond_with_error({
      event,
      options: options2,
      manifest: manifest2,
      state: state2,
      status: 500,
      error: e3,
      resolve_opts
    });
  }
}
__name(render_page, "render_page");
var INVALID_COOKIE_CHARACTER_REGEX = /[\x00-\x1F\x7F()<>@,;:"/[\]?={} \t]/;
function validate_options(options2) {
  if (options2?.path === void 0) {
    throw new Error("You must specify a `path` when setting, deleting or serializing cookies");
  }
}
__name(validate_options, "validate_options");
function get_cookies(request, url) {
  const header = request.headers.get("cookie") ?? "";
  const initial_cookies = (0, import_cookie.parse)(header, { decode: /* @__PURE__ */ __name((value) => value, "decode") });
  let normalized_url;
  const new_cookies = {};
  const defaults = {
    httpOnly: true,
    sameSite: "lax",
    secure: url.hostname === "localhost" && url.protocol === "http:" ? false : true
  };
  const cookies = {
    // The JSDoc param annotations appearing below for get, set and delete
    // are necessary to expose the `cookie` library types to
    // typescript users. `@type {import('@sveltejs/kit').Cookies}` above is not
    // sufficient to do so.
    /**
     * @param {string} name
     * @param {import('cookie').CookieParseOptions} [opts]
     */
    get(name, opts) {
      const c2 = new_cookies[name];
      if (c2 && domain_matches(url.hostname, c2.options.domain) && path_matches(url.pathname, c2.options.path)) {
        return c2.value;
      }
      const req_cookies = (0, import_cookie.parse)(header, { decode: opts?.decode });
      const cookie = req_cookies[name];
      return cookie;
    },
    /**
     * @param {import('cookie').CookieParseOptions} [opts]
     */
    getAll(opts) {
      const cookies2 = (0, import_cookie.parse)(header, { decode: opts?.decode });
      for (const c2 of Object.values(new_cookies)) {
        if (domain_matches(url.hostname, c2.options.domain) && path_matches(url.pathname, c2.options.path)) {
          cookies2[c2.name] = c2.value;
        }
      }
      return Object.entries(cookies2).map(([name, value]) => ({ name, value }));
    },
    /**
     * @param {string} name
     * @param {string} value
     * @param {import('./page/types.js').Cookie['options']} options
     */
    set(name, value, options2) {
      const illegal_characters = name.match(INVALID_COOKIE_CHARACTER_REGEX);
      if (illegal_characters) {
        console.warn(
          `The cookie name "${name}" will be invalid in SvelteKit 3.0 as it contains ${illegal_characters.join(
            " and "
          )}. See RFC 2616 for more details https://datatracker.ietf.org/doc/html/rfc2616#section-2.2`
        );
      }
      validate_options(options2);
      set_internal(name, value, { ...defaults, ...options2 });
    },
    /**
     * @param {string} name
     *  @param {import('./page/types.js').Cookie['options']} options
     */
    delete(name, options2) {
      validate_options(options2);
      cookies.set(name, "", { ...options2, maxAge: 0 });
    },
    /**
     * @param {string} name
     * @param {string} value
     *  @param {import('./page/types.js').Cookie['options']} options
     */
    serialize(name, value, options2) {
      validate_options(options2);
      let path = options2.path;
      if (!options2.domain || options2.domain === url.hostname) {
        if (!normalized_url) {
          throw new Error("Cannot serialize cookies until after the route is determined");
        }
        path = resolve(normalized_url, path);
      }
      return (0, import_cookie.serialize)(name, value, { ...defaults, ...options2, path });
    }
  };
  function get_cookie_header(destination, header2) {
    const combined_cookies = {
      // cookies sent by the user agent have lowest precedence
      ...initial_cookies
    };
    for (const key2 in new_cookies) {
      const cookie = new_cookies[key2];
      if (!domain_matches(destination.hostname, cookie.options.domain)) continue;
      if (!path_matches(destination.pathname, cookie.options.path)) continue;
      const encoder22 = cookie.options.encode || encodeURIComponent;
      combined_cookies[cookie.name] = encoder22(cookie.value);
    }
    if (header2) {
      const parsed = (0, import_cookie.parse)(header2, { decode: /* @__PURE__ */ __name((value) => value, "decode") });
      for (const name in parsed) {
        combined_cookies[name] = parsed[name];
      }
    }
    return Object.entries(combined_cookies).map(([name, value]) => `${name}=${value}`).join("; ");
  }
  __name(get_cookie_header, "get_cookie_header");
  const internal_queue = [];
  function set_internal(name, value, options2) {
    if (!normalized_url) {
      internal_queue.push(() => set_internal(name, value, options2));
      return;
    }
    let path = options2.path;
    if (!options2.domain || options2.domain === url.hostname) {
      path = resolve(normalized_url, path);
    }
    new_cookies[name] = { name, value, options: { ...options2, path } };
  }
  __name(set_internal, "set_internal");
  function set_trailing_slash(trailing_slash) {
    normalized_url = normalize_path(url.pathname, trailing_slash);
    internal_queue.forEach((fn) => fn());
  }
  __name(set_trailing_slash, "set_trailing_slash");
  return { cookies, new_cookies, get_cookie_header, set_internal, set_trailing_slash };
}
__name(get_cookies, "get_cookies");
function domain_matches(hostname, constraint) {
  if (!constraint) return true;
  const normalized = constraint[0] === "." ? constraint.slice(1) : constraint;
  if (hostname === normalized) return true;
  return hostname.endsWith("." + normalized);
}
__name(domain_matches, "domain_matches");
function path_matches(path, constraint) {
  if (!constraint) return true;
  const normalized = constraint.endsWith("/") ? constraint.slice(0, -1) : constraint;
  if (path === normalized) return true;
  return path.startsWith(normalized + "/");
}
__name(path_matches, "path_matches");
function add_cookies_to_headers(headers2, cookies) {
  for (const new_cookie of cookies) {
    const { name, value, options: options2 } = new_cookie;
    headers2.append("set-cookie", (0, import_cookie.serialize)(name, value, options2));
    if (options2.path.endsWith(".html")) {
      const path = add_data_suffix(options2.path);
      headers2.append("set-cookie", (0, import_cookie.serialize)(name, value, { ...options2, path }));
    }
  }
}
__name(add_cookies_to_headers, "add_cookies_to_headers");
function create_fetch({ event, options: options2, manifest: manifest2, state: state2, get_cookie_header, set_internal }) {
  const server_fetch = /* @__PURE__ */ __name(async (info, init2) => {
    const original_request = normalize_fetch_input(info, init2, event.url);
    let mode = (info instanceof Request ? info.mode : init2?.mode) ?? "cors";
    let credentials = (info instanceof Request ? info.credentials : init2?.credentials) ?? "same-origin";
    return options2.hooks.handleFetch({
      event,
      request: original_request,
      fetch: /* @__PURE__ */ __name(async (info2, init3) => {
        const request = normalize_fetch_input(info2, init3, event.url);
        const url = new URL(request.url);
        if (!request.headers.has("origin")) {
          request.headers.set("origin", event.url.origin);
        }
        if (info2 !== original_request) {
          mode = (info2 instanceof Request ? info2.mode : init3?.mode) ?? "cors";
          credentials = (info2 instanceof Request ? info2.credentials : init3?.credentials) ?? "same-origin";
        }
        if ((request.method === "GET" || request.method === "HEAD") && (mode === "no-cors" && url.origin !== event.url.origin || url.origin === event.url.origin)) {
          request.headers.delete("origin");
        }
        if (url.origin !== event.url.origin) {
          if (`.${url.hostname}`.endsWith(`.${event.url.hostname}`) && credentials !== "omit") {
            const cookie = get_cookie_header(url, request.headers.get("cookie"));
            if (cookie) request.headers.set("cookie", cookie);
          }
          return fetch(request);
        }
        const prefix = assets || base;
        const decoded = decodeURIComponent(url.pathname);
        const filename = (decoded.startsWith(prefix) ? decoded.slice(prefix.length) : decoded).slice(1);
        const filename_html = `${filename}/index.html`;
        const is_asset = manifest2.assets.has(filename) || filename in manifest2._.server_assets;
        const is_asset_html = manifest2.assets.has(filename_html) || filename_html in manifest2._.server_assets;
        if (is_asset || is_asset_html) {
          const file = is_asset ? filename : filename_html;
          if (state2.read) {
            const type = is_asset ? manifest2.mimeTypes[filename.slice(filename.lastIndexOf("."))] : "text/html";
            return new Response(state2.read(file), {
              headers: type ? { "content-type": type } : {}
            });
          } else if (read_implementation && file in manifest2._.server_assets) {
            const length = manifest2._.server_assets[file];
            const type = manifest2.mimeTypes[file.slice(file.lastIndexOf("."))];
            return new Response(read_implementation(file), {
              headers: {
                "Content-Length": "" + length,
                "Content-Type": type
              }
            });
          }
          return await fetch(request);
        }
        if (has_prerendered_path(manifest2, base + decoded)) {
          return await fetch(request);
        }
        if (credentials !== "omit") {
          const cookie = get_cookie_header(url, request.headers.get("cookie"));
          if (cookie) {
            request.headers.set("cookie", cookie);
          }
          const authorization = event.request.headers.get("authorization");
          if (authorization && !request.headers.has("authorization")) {
            request.headers.set("authorization", authorization);
          }
        }
        if (!request.headers.has("accept")) {
          request.headers.set("accept", "*/*");
        }
        if (!request.headers.has("accept-language")) {
          request.headers.set(
            "accept-language",
            /** @type {string} */
            event.request.headers.get("accept-language")
          );
        }
        const response = await respond(request, options2, manifest2, {
          ...state2,
          depth: state2.depth + 1
        });
        const set_cookie = response.headers.get("set-cookie");
        if (set_cookie) {
          for (const str of set_cookie_parser.splitCookiesString(set_cookie)) {
            const { name, value, ...options3 } = set_cookie_parser.parseString(str, {
              decodeValues: false
            });
            const path = options3.path ?? (url.pathname.split("/").slice(0, -1).join("/") || "/");
            set_internal(name, value, {
              path,
              encode: /* @__PURE__ */ __name((value2) => value2, "encode"),
              .../** @type {import('cookie').CookieSerializeOptions} */
              options3
            });
          }
        }
        return response;
      }, "fetch")
    });
  }, "server_fetch");
  return (input, init2) => {
    const response = server_fetch(input, init2);
    response.catch(() => {
    });
    return response;
  };
}
__name(create_fetch, "create_fetch");
function normalize_fetch_input(info, init2, url) {
  if (info instanceof Request) {
    return info;
  }
  return new Request(typeof info === "string" ? new URL(info, url) : info, init2);
}
__name(normalize_fetch_input, "normalize_fetch_input");
var body;
var etag;
var headers;
function get_public_env(request) {
  body ??= `export const env=${JSON.stringify(public_env)}`;
  etag ??= `W/${Date.now()}`;
  headers ??= new Headers({
    "content-type": "application/javascript; charset=utf-8",
    etag
  });
  if (request.headers.get("if-none-match") === etag) {
    return new Response(void 0, { status: 304, headers });
  }
  return new Response(body, { headers });
}
__name(get_public_env, "get_public_env");
var default_transform = /* @__PURE__ */ __name(({ html }) => html, "default_transform");
var default_filter = /* @__PURE__ */ __name(() => false, "default_filter");
var default_preload = /* @__PURE__ */ __name(({ type }) => type === "js" || type === "css", "default_preload");
var page_methods = /* @__PURE__ */ new Set(["GET", "HEAD", "POST"]);
var allowed_page_methods = /* @__PURE__ */ new Set(["GET", "HEAD", "OPTIONS"]);
async function respond(request, options2, manifest2, state2) {
  const url = new URL(request.url);
  if (options2.csrf_check_origin) {
    const forbidden = is_form_content_type(request) && (request.method === "POST" || request.method === "PUT" || request.method === "PATCH" || request.method === "DELETE") && request.headers.get("origin") !== url.origin;
    if (forbidden) {
      const csrf_error = new HttpError(
        403,
        `Cross-site ${request.method} form submissions are forbidden`
      );
      if (request.headers.get("accept") === "application/json") {
        return json(csrf_error.body, { status: csrf_error.status });
      }
      return text(csrf_error.body.message, { status: csrf_error.status });
    }
  }
  if (options2.hash_routing && url.pathname !== base + "/" && url.pathname !== "/[fallback]") {
    return text("Not found", { status: 404 });
  }
  let invalidated_data_nodes;
  const is_route_resolution_request = has_resolution_suffix(url.pathname);
  const is_data_request = has_data_suffix(url.pathname);
  if (is_route_resolution_request) {
    url.pathname = strip_resolution_suffix(url.pathname);
  } else if (is_data_request) {
    url.pathname = strip_data_suffix(url.pathname) + (url.searchParams.get(TRAILING_SLASH_PARAM) === "1" ? "/" : "") || "/";
    url.searchParams.delete(TRAILING_SLASH_PARAM);
    invalidated_data_nodes = url.searchParams.get(INVALIDATED_PARAM)?.split("").map((node) => node === "1");
    url.searchParams.delete(INVALIDATED_PARAM);
  }
  const headers2 = {};
  const { cookies, new_cookies, get_cookie_header, set_internal, set_trailing_slash } = get_cookies(
    request,
    url
  );
  const event = {
    cookies,
    // @ts-expect-error `fetch` needs to be created after the `event` itself
    fetch: null,
    getClientAddress: state2.getClientAddress || (() => {
      throw new Error(
        `${"@sveltejs/adapter-cloudflare"} does not specify getClientAddress. Please raise an issue`
      );
    }),
    locals: {},
    params: {},
    platform: state2.platform,
    request,
    route: { id: null },
    setHeaders: /* @__PURE__ */ __name((new_headers) => {
      for (const key2 in new_headers) {
        const lower = key2.toLowerCase();
        const value = new_headers[key2];
        if (lower === "set-cookie") {
          throw new Error(
            "Use `event.cookies.set(name, value, options)` instead of `event.setHeaders` to set cookies"
          );
        } else if (lower in headers2) {
          throw new Error(`"${key2}" header is already set`);
        } else {
          headers2[lower] = value;
          if (state2.prerendering && lower === "cache-control") {
            state2.prerendering.cache = /** @type {string} */
            value;
          }
        }
      }
    }, "setHeaders"),
    url,
    isDataRequest: is_data_request,
    isSubRequest: state2.depth > 0
  };
  event.fetch = create_fetch({
    event,
    options: options2,
    manifest: manifest2,
    state: state2,
    get_cookie_header,
    set_internal
  });
  if (state2.emulator?.platform) {
    event.platform = await state2.emulator.platform({
      config: {},
      prerender: !!state2.prerendering?.fallback
    });
  }
  let resolved_path;
  const prerendering_reroute_state = state2.prerendering?.inside_reroute;
  try {
    if (state2.prerendering) state2.prerendering.inside_reroute = true;
    resolved_path = await options2.hooks.reroute({ url: new URL(url), fetch: event.fetch }) ?? url.pathname;
  } catch {
    return text("Internal Server Error", {
      status: 500
    });
  } finally {
    if (state2.prerendering) state2.prerendering.inside_reroute = prerendering_reroute_state;
  }
  try {
    resolved_path = decode_pathname(resolved_path);
  } catch {
    return text("Malformed URI", { status: 400 });
  }
  if (resolved_path !== url.pathname && !state2.prerendering?.fallback && has_prerendered_path(manifest2, resolved_path)) {
    const url2 = new URL(request.url);
    url2.pathname = is_data_request ? add_data_suffix(resolved_path) : is_route_resolution_request ? add_resolution_suffix(resolved_path) : resolved_path;
    const response = await fetch(url2, request);
    const headers22 = new Headers(response.headers);
    if (headers22.has("content-encoding")) {
      headers22.delete("content-encoding");
      headers22.delete("content-length");
    }
    return new Response(response.body, {
      headers: headers22,
      status: response.status,
      statusText: response.statusText
    });
  }
  let route = null;
  if (base && !state2.prerendering?.fallback) {
    if (!resolved_path.startsWith(base)) {
      return text("Not found", { status: 404 });
    }
    resolved_path = resolved_path.slice(base.length) || "/";
  }
  if (is_route_resolution_request) {
    return resolve_route(resolved_path, new URL(request.url), manifest2);
  }
  if (resolved_path === `/${app_dir}/env.js`) {
    return get_public_env(request);
  }
  if (resolved_path.startsWith(`/${app_dir}`)) {
    const headers22 = new Headers();
    headers22.set("cache-control", "public, max-age=0, must-revalidate");
    return text("Not found", { status: 404, headers: headers22 });
  }
  if (!state2.prerendering?.fallback) {
    const matchers = await manifest2._.matchers();
    for (const candidate of manifest2._.routes) {
      const match = candidate.pattern.exec(resolved_path);
      if (!match) continue;
      const matched = exec(match, candidate.params, matchers);
      if (matched) {
        route = candidate;
        event.route = { id: route.id };
        event.params = decode_params(matched);
        break;
      }
    }
  }
  let resolve_opts = {
    transformPageChunk: default_transform,
    filterSerializedResponseHeaders: default_filter,
    preload: default_preload
  };
  let trailing_slash = "never";
  try {
    const page_nodes = route?.page ? new PageNodes(await load_page_nodes(route.page, manifest2)) : void 0;
    if (route) {
      if (url.pathname === base || url.pathname === base + "/") {
        trailing_slash = "always";
      } else if (page_nodes) {
        if (DEV) ;
        trailing_slash = page_nodes.trailing_slash();
      } else if (route.endpoint) {
        const node = await route.endpoint();
        trailing_slash = node.trailingSlash ?? "never";
        if (DEV) ;
      }
      if (!is_data_request) {
        const normalized = normalize_path(url.pathname, trailing_slash);
        if (normalized !== url.pathname && !state2.prerendering?.fallback) {
          return new Response(void 0, {
            status: 308,
            headers: {
              "x-sveltekit-normalize": "1",
              location: (
                // ensure paths starting with '//' are not treated as protocol-relative
                (normalized.startsWith("//") ? url.origin + normalized : normalized) + (url.search === "?" ? "" : url.search)
              )
            }
          });
        }
      }
      if (state2.before_handle || state2.emulator?.platform) {
        let config = {};
        let prerender = false;
        if (route.endpoint) {
          const node = await route.endpoint();
          config = node.config ?? config;
          prerender = node.prerender ?? prerender;
        } else if (page_nodes) {
          config = page_nodes.get_config() ?? config;
          prerender = page_nodes.prerender();
        }
        if (state2.before_handle) {
          state2.before_handle(event, config, prerender);
        }
        if (state2.emulator?.platform) {
          event.platform = await state2.emulator.platform({ config, prerender });
        }
      }
    }
    set_trailing_slash(trailing_slash);
    if (state2.prerendering && !state2.prerendering.fallback && !state2.prerendering.inside_reroute) {
      disable_search(url);
    }
    const response = await with_event(
      event,
      () => options2.hooks.handle({
        event,
        resolve: /* @__PURE__ */ __name((event2, opts) => (
          // counter-intuitively, we need to clear the event, so that it's not
          // e.g. accessible when loading modules needed to handle the request
          with_event(
            null,
            () => resolve2(event2, page_nodes, opts).then((response2) => {
              for (const key2 in headers2) {
                const value = headers2[key2];
                response2.headers.set(
                  key2,
                  /** @type {string} */
                  value
                );
              }
              add_cookies_to_headers(response2.headers, Object.values(new_cookies));
              if (state2.prerendering && event2.route.id !== null) {
                response2.headers.set("x-sveltekit-routeid", encodeURI(event2.route.id));
              }
              return response2;
            })
          )
        ), "resolve")
      })
    );
    if (response.status === 200 && response.headers.has("etag")) {
      let if_none_match_value = request.headers.get("if-none-match");
      if (if_none_match_value?.startsWith('W/"')) {
        if_none_match_value = if_none_match_value.substring(2);
      }
      const etag2 = (
        /** @type {string} */
        response.headers.get("etag")
      );
      if (if_none_match_value === etag2) {
        const headers22 = new Headers({ etag: etag2 });
        for (const key2 of [
          "cache-control",
          "content-location",
          "date",
          "expires",
          "vary",
          "set-cookie"
        ]) {
          const value = response.headers.get(key2);
          if (value) headers22.set(key2, value);
        }
        return new Response(void 0, {
          status: 304,
          headers: headers22
        });
      }
    }
    if (is_data_request && response.status >= 300 && response.status <= 308) {
      const location = response.headers.get("location");
      if (location) {
        return redirect_json_response(new Redirect(
          /** @type {any} */
          response.status,
          location
        ));
      }
    }
    return response;
  } catch (e3) {
    if (e3 instanceof Redirect) {
      const response = is_data_request ? redirect_json_response(e3) : route?.page && is_action_json_request(event) ? action_json_redirect(e3) : redirect_response(e3.status, e3.location);
      add_cookies_to_headers(response.headers, Object.values(new_cookies));
      return response;
    }
    return await handle_fatal_error(event, options2, e3);
  }
  async function resolve2(event2, page_nodes, opts) {
    try {
      if (opts) {
        resolve_opts = {
          transformPageChunk: opts.transformPageChunk || default_transform,
          filterSerializedResponseHeaders: opts.filterSerializedResponseHeaders || default_filter,
          preload: opts.preload || default_preload
        };
      }
      if (options2.hash_routing || state2.prerendering?.fallback) {
        return await render_response({
          event: event2,
          options: options2,
          manifest: manifest2,
          state: state2,
          page_config: { ssr: false, csr: true },
          status: 200,
          error: null,
          branch: [],
          fetched: [],
          resolve_opts
        });
      }
      if (route) {
        const method = (
          /** @type {import('types').HttpMethod} */
          event2.request.method
        );
        let response;
        if (is_data_request) {
          response = await render_data(
            event2,
            route,
            options2,
            manifest2,
            state2,
            invalidated_data_nodes,
            trailing_slash
          );
        } else if (route.endpoint && (!route.page || is_endpoint_request(event2))) {
          response = await render_endpoint(event2, await route.endpoint(), state2);
        } else if (route.page) {
          if (!page_nodes) {
            throw new Error("page_nodes not found. This should never happen");
          } else if (page_methods.has(method)) {
            response = await render_page(
              event2,
              route.page,
              options2,
              manifest2,
              state2,
              page_nodes,
              resolve_opts
            );
          } else {
            const allowed_methods2 = new Set(allowed_page_methods);
            const node = await manifest2._.nodes[route.page.leaf]();
            if (node?.server?.actions) {
              allowed_methods2.add("POST");
            }
            if (method === "OPTIONS") {
              response = new Response(null, {
                status: 204,
                headers: {
                  allow: Array.from(allowed_methods2.values()).join(", ")
                }
              });
            } else {
              const mod = [...allowed_methods2].reduce(
                (acc, curr) => {
                  acc[curr] = true;
                  return acc;
                },
                /** @type {Record<string, any>} */
                {}
              );
              response = method_not_allowed(mod, method);
            }
          }
        } else {
          throw new Error("Route is neither page nor endpoint. This should never happen");
        }
        if (request.method === "GET" && route.page && route.endpoint) {
          const vary = response.headers.get("vary")?.split(",")?.map((v) => v.trim().toLowerCase());
          if (!(vary?.includes("accept") || vary?.includes("*"))) {
            response = new Response(response.body, {
              status: response.status,
              statusText: response.statusText,
              headers: new Headers(response.headers)
            });
            response.headers.append("Vary", "Accept");
          }
        }
        return response;
      }
      if (state2.error && event2.isSubRequest) {
        const headers22 = new Headers(request.headers);
        headers22.set("x-sveltekit-error", "true");
        return await fetch(request, { headers: headers22 });
      }
      if (state2.error) {
        return text("Internal Server Error", {
          status: 500
        });
      }
      if (state2.depth === 0) {
        return await respond_with_error({
          event: event2,
          options: options2,
          manifest: manifest2,
          state: state2,
          status: 404,
          error: new SvelteKitError(404, "Not Found", `Not found: ${event2.url.pathname}`),
          resolve_opts
        });
      }
      if (state2.prerendering) {
        return text("not found", { status: 404 });
      }
      return await fetch(request);
    } catch (e3) {
      return await handle_fatal_error(event2, options2, e3);
    } finally {
      event2.cookies.set = () => {
        throw new Error("Cannot use `cookies.set(...)` after the response has been generated");
      };
      event2.setHeaders = () => {
        throw new Error("Cannot use `setHeaders(...)` after the response has been generated");
      };
    }
  }
  __name(resolve2, "resolve2");
}
__name(respond, "respond");
function load_page_nodes(page3, manifest2) {
  return Promise.all([
    // we use == here rather than === because [undefined] serializes as "[null]"
    ...page3.layouts.map((n2) => n2 == void 0 ? n2 : manifest2._.nodes[n2]()),
    manifest2._.nodes[page3.leaf]()
  ]);
}
__name(load_page_nodes, "load_page_nodes");
function filter_private_env(env, { public_prefix, private_prefix }) {
  return Object.fromEntries(
    Object.entries(env).filter(
      ([k]) => k.startsWith(private_prefix) && (public_prefix === "" || !k.startsWith(public_prefix))
    )
  );
}
__name(filter_private_env, "filter_private_env");
function filter_public_env(env, { public_prefix, private_prefix }) {
  return Object.fromEntries(
    Object.entries(env).filter(
      ([k]) => k.startsWith(public_prefix) && (private_prefix === "" || !k.startsWith(private_prefix))
    )
  );
}
__name(filter_public_env, "filter_public_env");
var prerender_env_handler = {
  get({ type }, prop) {
    throw new Error(
      `Cannot read values from $env/dynamic/${type} while prerendering (attempted to read env.${prop.toString()}). Use $env/static/${type} instead`
    );
  }
};
var init_promise;
var Server = class {
  static {
    __name(this, "Server");
  }
  /** @type {import('types').SSROptions} */
  #options;
  /** @type {import('@sveltejs/kit').SSRManifest} */
  #manifest;
  /** @param {import('@sveltejs/kit').SSRManifest} manifest */
  constructor(manifest2) {
    this.#options = options;
    this.#manifest = manifest2;
  }
  /**
   * @param {{
   *   env: Record<string, string>;
   *   read?: (file: string) => ReadableStream;
   * }} opts
   */
  async init({ env, read }) {
    const prefixes = {
      public_prefix: this.#options.env_public_prefix,
      private_prefix: this.#options.env_private_prefix
    };
    const private_env = filter_private_env(env, prefixes);
    const public_env2 = filter_public_env(env, prefixes);
    set_private_env(
      prerendering ? new Proxy({ type: "private" }, prerender_env_handler) : private_env
    );
    set_public_env(
      prerendering ? new Proxy({ type: "public" }, prerender_env_handler) : public_env2
    );
    set_safe_public_env(public_env2);
    if (read) {
      set_read_implementation(read);
    }
    await (init_promise ??= (async () => {
      try {
        const module = await get_hooks();
        this.#options.hooks = {
          handle: module.handle || (({ event, resolve: resolve2 }) => resolve2(event)),
          handleError: module.handleError || (({ status, error: error2 }) => console.error(status === 404 && /** @type {Error} */
          error2?.message || error2)),
          handleFetch: module.handleFetch || (({ request, fetch: fetch2 }) => fetch2(request)),
          reroute: module.reroute || (() => {
          }),
          transport: module.transport || {}
        };
        if (module.init) {
          await module.init();
        }
      } catch (error2) {
        {
          throw error2;
        }
      }
    })());
  }
  /**
   * @param {Request} request
   * @param {import('types').RequestOptions} options
   */
  async respond(request, options2) {
    return respond(request, this.#options, this.#manifest, {
      ...options2,
      error: false,
      depth: 0
    });
  }
};

// .svelte-kit/cloudflare-tmp/manifest.js
var manifest = (() => {
  function __memo(fn) {
    let value;
    return () => value ??= value = fn();
  }
  __name(__memo, "__memo");
  return {
    appDir: "_app",
    appPath: "_app",
    assets: /* @__PURE__ */ new Set(["favicon.png"]),
    mimeTypes: { ".png": "image/png" },
    _: {
      client: { start: "_app/immutable/entry/start.CIJKvOzM.js", app: "_app/immutable/entry/app.D2jidsou.js", imports: ["_app/immutable/entry/start.CIJKvOzM.js", "_app/immutable/chunks/ClAlbAGz.js", "_app/immutable/chunks/D_AdGWyy.js", "_app/immutable/chunks/DIeogL5L.js", "_app/immutable/chunks/C7WNTl10.js", "_app/immutable/chunks/6lfPsB8W.js", "_app/immutable/entry/app.D2jidsou.js", "_app/immutable/chunks/D_AdGWyy.js", "_app/immutable/chunks/DIeogL5L.js", "_app/immutable/chunks/CxhRu3wT.js", "_app/immutable/chunks/BMlzsybF.js", "_app/immutable/chunks/CWj6FrbW.js", "_app/immutable/chunks/6lfPsB8W.js", "_app/immutable/chunks/-ucBVdge.js", "_app/immutable/chunks/BKg0ivWU.js", "_app/immutable/chunks/CamM0Y98.js", "_app/immutable/chunks/C7WNTl10.js"], stylesheets: [], fonts: [], uses_env_dynamic_public: false },
      nodes: [
        __memo(() => Promise.resolve().then(() => (init__(), __exports))),
        __memo(() => Promise.resolve().then(() => (init__2(), __exports2))),
        __memo(() => Promise.resolve().then(() => (init__3(), __exports3))),
        __memo(() => Promise.resolve().then(() => (init__4(), __exports4))),
        __memo(() => Promise.resolve().then(() => (init__5(), __exports5))),
        __memo(() => Promise.resolve().then(() => (init__6(), __exports6))),
        __memo(() => Promise.resolve().then(() => (init__7(), __exports7))),
        __memo(() => Promise.resolve().then(() => (init__8(), __exports8))),
        __memo(() => Promise.resolve().then(() => (init__9(), __exports9))),
        __memo(() => Promise.resolve().then(() => (init__10(), __exports10))),
        __memo(() => Promise.resolve().then(() => (init__11(), __exports11))),
        __memo(() => Promise.resolve().then(() => (init__12(), __exports12))),
        __memo(() => Promise.resolve().then(() => (init__13(), __exports13))),
        __memo(() => Promise.resolve().then(() => (init__14(), __exports14))),
        __memo(() => Promise.resolve().then(() => (init__15(), __exports15))),
        __memo(() => Promise.resolve().then(() => (init__16(), __exports16))),
        __memo(() => Promise.resolve().then(() => (init__17(), __exports17))),
        __memo(() => Promise.resolve().then(() => (init__18(), __exports18))),
        __memo(() => Promise.resolve().then(() => (init__19(), __exports19))),
        __memo(() => Promise.resolve().then(() => (init__20(), __exports20))),
        __memo(() => Promise.resolve().then(() => (init__21(), __exports21))),
        __memo(() => Promise.resolve().then(() => (init__22(), __exports22))),
        __memo(() => Promise.resolve().then(() => (init__23(), __exports23))),
        __memo(() => Promise.resolve().then(() => (init__24(), __exports24))),
        __memo(() => Promise.resolve().then(() => (init__25(), __exports25))),
        __memo(() => Promise.resolve().then(() => (init__26(), __exports26))),
        __memo(() => Promise.resolve().then(() => (init__27(), __exports27))),
        __memo(() => Promise.resolve().then(() => (init__28(), __exports28))),
        __memo(() => Promise.resolve().then(() => (init__29(), __exports29))),
        __memo(() => Promise.resolve().then(() => (init__30(), __exports30)))
      ],
      routes: [
        {
          id: "/",
          pattern: /^\/$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 2 },
          endpoint: null
        },
        {
          id: "/docs",
          pattern: /^\/docs\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 3 },
          endpoint: null
        },
        {
          id: "/docs/new",
          pattern: /^\/docs\/new\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 5 },
          endpoint: null
        },
        {
          id: "/docs/[id]/edit",
          pattern: /^\/docs\/([^/]+?)\/edit\/?$/,
          params: [{ "name": "id", "optional": false, "rest": false, "chained": false }],
          page: { layouts: [0], errors: [1], leaf: 4 },
          endpoint: null
        },
        {
          id: "/goals",
          pattern: /^\/goals\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 6 },
          endpoint: null
        },
        {
          id: "/goals/new",
          pattern: /^\/goals\/new\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 9 },
          endpoint: null
        },
        {
          id: "/goals/[id]",
          pattern: /^\/goals\/([^/]+?)\/?$/,
          params: [{ "name": "id", "optional": false, "rest": false, "chained": false }],
          page: { layouts: [0], errors: [1], leaf: 7 },
          endpoint: null
        },
        {
          id: "/goals/[id]/edit",
          pattern: /^\/goals\/([^/]+?)\/edit\/?$/,
          params: [{ "name": "id", "optional": false, "rest": false, "chained": false }],
          page: { layouts: [0], errors: [1], leaf: 8 },
          endpoint: null
        },
        {
          id: "/ideas",
          pattern: /^\/ideas\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 10 },
          endpoint: null
        },
        {
          id: "/ideas/new",
          pattern: /^\/ideas\/new\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 13 },
          endpoint: null
        },
        {
          id: "/ideas/[id]",
          pattern: /^\/ideas\/([^/]+?)\/?$/,
          params: [{ "name": "id", "optional": false, "rest": false, "chained": false }],
          page: { layouts: [0], errors: [1], leaf: 11 },
          endpoint: null
        },
        {
          id: "/ideas/[id]/edit",
          pattern: /^\/ideas\/([^/]+?)\/edit\/?$/,
          params: [{ "name": "id", "optional": false, "rest": false, "chained": false }],
          page: { layouts: [0], errors: [1], leaf: 12 },
          endpoint: null
        },
        {
          id: "/notes",
          pattern: /^\/notes\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 14 },
          endpoint: null
        },
        {
          id: "/notes/new",
          pattern: /^\/notes\/new\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 17 },
          endpoint: null
        },
        {
          id: "/notes/[id]",
          pattern: /^\/notes\/([^/]+?)\/?$/,
          params: [{ "name": "id", "optional": false, "rest": false, "chained": false }],
          page: { layouts: [0], errors: [1], leaf: 15 },
          endpoint: null
        },
        {
          id: "/notes/[id]/edit",
          pattern: /^\/notes\/([^/]+?)\/edit\/?$/,
          params: [{ "name": "id", "optional": false, "rest": false, "chained": false }],
          page: { layouts: [0], errors: [1], leaf: 16 },
          endpoint: null
        },
        {
          id: "/projects",
          pattern: /^\/projects\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 18 },
          endpoint: null
        },
        {
          id: "/projects/new",
          pattern: /^\/projects\/new\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 21 },
          endpoint: null
        },
        {
          id: "/projects/[id]",
          pattern: /^\/projects\/([^/]+?)\/?$/,
          params: [{ "name": "id", "optional": false, "rest": false, "chained": false }],
          page: { layouts: [0], errors: [1], leaf: 19 },
          endpoint: null
        },
        {
          id: "/projects/[id]/edit",
          pattern: /^\/projects\/([^/]+?)\/edit\/?$/,
          params: [{ "name": "id", "optional": false, "rest": false, "chained": false }],
          page: { layouts: [0], errors: [1], leaf: 20 },
          endpoint: null
        },
        {
          id: "/resources",
          pattern: /^\/resources\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 22 },
          endpoint: null
        },
        {
          id: "/resources/new",
          pattern: /^\/resources\/new\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 25 },
          endpoint: null
        },
        {
          id: "/resources/[id]",
          pattern: /^\/resources\/([^/]+?)\/?$/,
          params: [{ "name": "id", "optional": false, "rest": false, "chained": false }],
          page: { layouts: [0], errors: [1], leaf: 23 },
          endpoint: null
        },
        {
          id: "/resources/[id]/edit",
          pattern: /^\/resources\/([^/]+?)\/edit\/?$/,
          params: [{ "name": "id", "optional": false, "rest": false, "chained": false }],
          page: { layouts: [0], errors: [1], leaf: 24 },
          endpoint: null
        },
        {
          id: "/tasks",
          pattern: /^\/tasks\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 26 },
          endpoint: null
        },
        {
          id: "/tasks/new",
          pattern: /^\/tasks\/new\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 29 },
          endpoint: null
        },
        {
          id: "/tasks/[id]",
          pattern: /^\/tasks\/([^/]+?)\/?$/,
          params: [{ "name": "id", "optional": false, "rest": false, "chained": false }],
          page: { layouts: [0], errors: [1], leaf: 27 },
          endpoint: null
        },
        {
          id: "/tasks/[id]/edit",
          pattern: /^\/tasks\/([^/]+?)\/edit\/?$/,
          params: [{ "name": "id", "optional": false, "rest": false, "chained": false }],
          page: { layouts: [0], errors: [1], leaf: 28 },
          endpoint: null
        }
      ],
      prerendered_routes: /* @__PURE__ */ new Set([]),
      matchers: /* @__PURE__ */ __name(async () => {
        return {};
      }, "matchers"),
      server_assets: {}
    }
  };
})();
var prerendered = /* @__PURE__ */ new Set([]);
var base_path = "";

// .svelte-kit/cloudflare/_worker.js
async function e(e3, t2) {
  let n2 = "string" != typeof t2 && "HEAD" === t2.method;
  n2 && (t2 = new Request(t2, { method: "GET" }));
  let r3 = await e3.match(t2);
  return n2 && r3 && (r3 = new Response(null, r3)), r3;
}
__name(e, "e");
function t(e3, t2, n2, o2) {
  return ("string" == typeof t2 || "GET" === t2.method) && r(n2) && (n2.headers.has("Set-Cookie") && (n2 = new Response(n2.body, n2)).headers.append("Cache-Control", "private=Set-Cookie"), o2.waitUntil(e3.put(t2, n2.clone()))), n2;
}
__name(t, "t");
var n = /* @__PURE__ */ new Set([200, 203, 204, 300, 301, 404, 405, 410, 414, 501]);
function r(e3) {
  if (!n.has(e3.status)) return false;
  if (~(e3.headers.get("Vary") || "").indexOf("*")) return false;
  let t2 = e3.headers.get("Cache-Control") || "";
  return !/(private|no-cache|no-store)/i.test(t2);
}
__name(r, "r");
function o(n2) {
  return async function(r3, o2) {
    let a = await e(n2, r3);
    if (a) return a;
    o2.defer((e3) => {
      t(n2, r3, e3, o2);
    });
  };
}
__name(o, "o");
var s2 = caches.default;
var c = t.bind(0, s2);
var r2 = e.bind(0, s2);
var e2 = o.bind(0, s2);
var server = new Server(manifest);
var app_path = `/${manifest.appPath}`;
var immutable = `${app_path}/immutable/`;
var version_file = `${app_path}/version.json`;
var worker_default = {
  /**
   * @param {Request} req
   * @param {{ ASSETS: { fetch: typeof fetch } }} env
   * @param {ExecutionContext} context
   * @returns {Promise<Response>}
   */
  async fetch(req, env, context2) {
    await server.init({
      // @ts-expect-error env contains environment variables and bindings
      env
    });
    let pragma = req.headers.get("cache-control") || "";
    let res = !pragma.includes("no-cache") && await r2(req);
    if (res) return res;
    let { pathname, search } = new URL(req.url);
    try {
      pathname = decodeURIComponent(pathname);
    } catch {
    }
    const stripped_pathname = pathname.replace(/\/$/, "");
    let is_static_asset = false;
    const filename = stripped_pathname.slice(base_path.length + 1);
    if (filename) {
      is_static_asset = manifest.assets.has(filename) || manifest.assets.has(filename + "/index.html") || filename in manifest._.server_assets || filename + "/index.html" in manifest._.server_assets;
    }
    let location = pathname.at(-1) === "/" ? stripped_pathname : pathname + "/";
    if (is_static_asset || prerendered.has(pathname) || pathname === version_file || pathname.startsWith(immutable)) {
      res = await env.ASSETS.fetch(req);
    } else if (location && prerendered.has(location)) {
      if (search) location += search;
      res = new Response("", {
        status: 308,
        headers: {
          location
        }
      });
    } else {
      res = await server.respond(req, {
        platform: {
          env,
          context: context2,
          // @ts-expect-error webworker types from worktop are not compatible with Cloudflare Workers types
          caches,
          // @ts-expect-error the type is correct but ts is confused because platform.cf uses the type from index.ts while req.cf uses the type from index.d.ts
          cf: req.cf
        },
        getClientAddress() {
          return req.headers.get("cf-connecting-ip");
        }
      });
    }
    pragma = res.headers.get("cache-control") || "";
    return pragma && res.status < 400 ? c(req, res, context2) : res;
  }
};
export {
  worker_default as default
};
/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/
//# sourceMappingURL=_worker.js.map
