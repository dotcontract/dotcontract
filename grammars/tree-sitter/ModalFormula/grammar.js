module.exports = grammar({
  name: "ModalFormula",
  rules: {
    source_file: ($) => $.formula,
    formula: ($) =>
      choice($.boolean, $.or, $.and, $.empty_box, $.box, $.empty_dia, $.dia, $.prop, $.state_set_variable),
    boolean: ($) => choice("true", "false"),
    or: ($) => prec.left(1, seq($.formula, "or", $.formula)),
    and: ($) => prec.left(1, seq($.formula, "and", $.formula)),
    empty_box: ($) => prec.left(1, seq("[", "]", $.formula)),
    empty_dia: ($) => prec.left(1, seq("<", ">", $.formula)),
    box: ($) => prec.left(1, seq("[", $.action, "]", $.formula)),
    dia: ($) => prec.left(1, seq("<", $.action, ">", $.formula)),
    lfp: ($) =>
      prec.left(1, seq("lfp", "(", $.state_set_variable, ",", $.formula, ")")),
    gfp: ($) =>
      prec.left(1, seq("gfp", "(", $.state_set_variable, ",", $.formula, ")")),
    not: ($) => seq("not", $.formula),
    parens: ($) => seq("(", $.formula, ")"),
    action: ($) => repeat1($.prop),
    prop: ($) => seq(optional($.sign), $.prop_label),
    sign: ($) => choice("+", "-", "?"),
    prop_label: ($) => choice(/[A-Za-z0-9_/][A-Za-z0-9_/.]*/),
    variable: ($) => /[A-Za-z0-9_/][A-Za-z0-9_/.]*/,
    state_set_variable: ($) => /[@][A-Za-z0-9_]*/,
  },
});
