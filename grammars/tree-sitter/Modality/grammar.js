module.exports = grammar({
  name: "Modality",
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
    always: ($) => prec.left(1, seq("always", $.formula, optional(seq('until', $.formula)))),
    sometimes: ($) => prec.left(1, seq("sometimes", $.formula, optional(seq('until', $.formula)))),
    can: ($) => prec.left(1, seq("can", $.formula)),
    must: ($) => prec.left(1, seq("must", $.formula)),
    action: ($) => repeat1($.prop),
    prop: ($) => seq(optional($.sign), $.prop_label),
    sign: ($) => choice("+", "-", "?"),
    prop_label: ($) => choice(/[A-Za-z0-9_/][A-Za-z0-9_/.]*/, $.pred),
    pred: ($) => (/[A-Za-z0-9_/][A-Za-z0-9_/.]*/, "(", repeat($.arg), ")"),
    arg: ($) => choice($.string, $.number, $.variable, $.boolean),
    string: ($) =>
      choice(
        seq(
          '"',
          repeat(
            choice(
              alias($.unescaped_double_string_fragment, $.string_fragment),
              $.escape_sequence
            )
          ),
          '"'
        ),
        seq(
          "'",
          repeat(
            choice(
              alias($.unescaped_single_string_fragment, $.string_fragment),
              $.escape_sequence
            )
          ),
          "'"
        )
      ),
    unescaped_double_string_fragment: ($) =>
      token.immediate(prec(1, /[^"\\]+/)),
    unescaped_single_string_fragment: ($) =>
      token.immediate(prec(1, /[^'\\]+/)),
    escape_sequence: ($) =>
      token.immediate(
        seq(
          "\\",
          choice(
            /[^xu0-7]/,
            /[0-7]{1,3}/,
            /x[0-9a-fA-F]{2}/,
            /u[0-9a-fA-F]{4}/,
            /u{[0-9a-fA-F]+}/
          )
        )
      ),
    number: ($) => {
      const hex_literal = seq(choice("0x", "0X"), /[\da-fA-F](_?[\da-fA-F])*/);
      const decimal_digits = /\d(_?\d)*/;
      const signed_integer = seq(optional(choice("-", "+")), decimal_digits);
      const exponent_part = seq(choice("e", "E"), signed_integer);
      const binary_literal = seq(choice("0b", "0B"), /[0-1](_?[0-1])*/);
      const octal_literal = seq(choice("0o", "0O"), /[0-7](_?[0-7])*/);
      const bigint_literal = seq(
        choice(hex_literal, binary_literal, octal_literal, decimal_digits),
        "n"
      );
      const decimal_integer_literal = choice(
        "0",
        seq(
          optional("0"),
          /[1-9]/,
          optional(seq(optional("_"), decimal_digits))
        )
      );
      const decimal_literal = choice(
        seq(
          decimal_integer_literal,
          ".",
          optional(decimal_digits),
          optional(exponent_part)
        ),
        seq(".", decimal_digits, optional(exponent_part)),
        seq(decimal_integer_literal, exponent_part),
        seq(decimal_digits)
      );
      return token(
        choice(
          hex_literal,
          decimal_literal,
          binary_literal,
          octal_literal,
          bigint_literal
        )
      );
    },
    variable: ($) => /[A-Za-z0-9_/][A-Za-z0-9_/.]*/,
    state_set_variable: ($) => /[@][A-Za-z0-9_]*/,
  },
});
