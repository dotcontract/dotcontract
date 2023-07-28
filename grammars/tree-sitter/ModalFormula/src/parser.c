#include <tree_sitter/parser.h>

#if defined(__GNUC__) || defined(__clang__)
#pragma GCC diagnostic push
#pragma GCC diagnostic ignored "-Wmissing-field-initializers"
#endif

#define LANGUAGE_VERSION 14
#define STATE_COUNT 33
#define LARGE_STATE_COUNT 8
#define SYMBOL_COUNT 34
#define ALIAS_COUNT 0
#define TOKEN_COUNT 20
#define EXTERNAL_TOKEN_COUNT 0
#define FIELD_COUNT 0
#define MAX_ALIAS_SEQUENCE_LENGTH 4
#define PRODUCTION_ID_COUNT 1

enum {
  anon_sym_true = 1,
  anon_sym_false = 2,
  anon_sym_or = 3,
  anon_sym_and = 4,
  anon_sym_LBRACK = 5,
  anon_sym_RBRACK = 6,
  anon_sym_LT = 7,
  anon_sym_GT = 8,
  anon_sym_lfp = 9,
  anon_sym_LPAREN = 10,
  anon_sym_COMMA = 11,
  anon_sym_RPAREN = 12,
  anon_sym_gfp = 13,
  anon_sym_not = 14,
  anon_sym_PLUS = 15,
  anon_sym_DASH = 16,
  anon_sym_QMARK = 17,
  aux_sym_prop_label_token1 = 18,
  sym_state_set_variable = 19,
  sym_source_file = 20,
  sym_formula = 21,
  sym_boolean = 22,
  sym_or = 23,
  sym_and = 24,
  sym_empty_box = 25,
  sym_empty_dia = 26,
  sym_box = 27,
  sym_dia = 28,
  sym_action = 29,
  sym_prop = 30,
  sym_sign = 31,
  sym_prop_label = 32,
  aux_sym_action_repeat1 = 33,
};

static const char * const ts_symbol_names[] = {
  [ts_builtin_sym_end] = "end",
  [anon_sym_true] = "true",
  [anon_sym_false] = "false",
  [anon_sym_or] = "or",
  [anon_sym_and] = "and",
  [anon_sym_LBRACK] = "[",
  [anon_sym_RBRACK] = "]",
  [anon_sym_LT] = "<",
  [anon_sym_GT] = ">",
  [anon_sym_lfp] = "lfp",
  [anon_sym_LPAREN] = "(",
  [anon_sym_COMMA] = ",",
  [anon_sym_RPAREN] = ")",
  [anon_sym_gfp] = "gfp",
  [anon_sym_not] = "not",
  [anon_sym_PLUS] = "+",
  [anon_sym_DASH] = "-",
  [anon_sym_QMARK] = "\?",
  [aux_sym_prop_label_token1] = "prop_label_token1",
  [sym_state_set_variable] = "state_set_variable",
  [sym_source_file] = "source_file",
  [sym_formula] = "formula",
  [sym_boolean] = "boolean",
  [sym_or] = "or",
  [sym_and] = "and",
  [sym_empty_box] = "empty_box",
  [sym_empty_dia] = "empty_dia",
  [sym_box] = "box",
  [sym_dia] = "dia",
  [sym_action] = "action",
  [sym_prop] = "prop",
  [sym_sign] = "sign",
  [sym_prop_label] = "prop_label",
  [aux_sym_action_repeat1] = "action_repeat1",
};

static const TSSymbol ts_symbol_map[] = {
  [ts_builtin_sym_end] = ts_builtin_sym_end,
  [anon_sym_true] = anon_sym_true,
  [anon_sym_false] = anon_sym_false,
  [anon_sym_or] = anon_sym_or,
  [anon_sym_and] = anon_sym_and,
  [anon_sym_LBRACK] = anon_sym_LBRACK,
  [anon_sym_RBRACK] = anon_sym_RBRACK,
  [anon_sym_LT] = anon_sym_LT,
  [anon_sym_GT] = anon_sym_GT,
  [anon_sym_lfp] = anon_sym_lfp,
  [anon_sym_LPAREN] = anon_sym_LPAREN,
  [anon_sym_COMMA] = anon_sym_COMMA,
  [anon_sym_RPAREN] = anon_sym_RPAREN,
  [anon_sym_gfp] = anon_sym_gfp,
  [anon_sym_not] = anon_sym_not,
  [anon_sym_PLUS] = anon_sym_PLUS,
  [anon_sym_DASH] = anon_sym_DASH,
  [anon_sym_QMARK] = anon_sym_QMARK,
  [aux_sym_prop_label_token1] = aux_sym_prop_label_token1,
  [sym_state_set_variable] = sym_state_set_variable,
  [sym_source_file] = sym_source_file,
  [sym_formula] = sym_formula,
  [sym_boolean] = sym_boolean,
  [sym_or] = sym_or,
  [sym_and] = sym_and,
  [sym_empty_box] = sym_empty_box,
  [sym_empty_dia] = sym_empty_dia,
  [sym_box] = sym_box,
  [sym_dia] = sym_dia,
  [sym_action] = sym_action,
  [sym_prop] = sym_prop,
  [sym_sign] = sym_sign,
  [sym_prop_label] = sym_prop_label,
  [aux_sym_action_repeat1] = aux_sym_action_repeat1,
};

static const TSSymbolMetadata ts_symbol_metadata[] = {
  [ts_builtin_sym_end] = {
    .visible = false,
    .named = true,
  },
  [anon_sym_true] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_false] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_or] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_and] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_LBRACK] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_RBRACK] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_LT] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_GT] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_lfp] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_LPAREN] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_COMMA] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_RPAREN] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_gfp] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_not] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_PLUS] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_QMARK] = {
    .visible = true,
    .named = false,
  },
  [aux_sym_prop_label_token1] = {
    .visible = false,
    .named = false,
  },
  [sym_state_set_variable] = {
    .visible = true,
    .named = true,
  },
  [sym_source_file] = {
    .visible = true,
    .named = true,
  },
  [sym_formula] = {
    .visible = true,
    .named = true,
  },
  [sym_boolean] = {
    .visible = true,
    .named = true,
  },
  [sym_or] = {
    .visible = true,
    .named = true,
  },
  [sym_and] = {
    .visible = true,
    .named = true,
  },
  [sym_empty_box] = {
    .visible = true,
    .named = true,
  },
  [sym_empty_dia] = {
    .visible = true,
    .named = true,
  },
  [sym_box] = {
    .visible = true,
    .named = true,
  },
  [sym_dia] = {
    .visible = true,
    .named = true,
  },
  [sym_action] = {
    .visible = true,
    .named = true,
  },
  [sym_prop] = {
    .visible = true,
    .named = true,
  },
  [sym_sign] = {
    .visible = true,
    .named = true,
  },
  [sym_prop_label] = {
    .visible = true,
    .named = true,
  },
  [aux_sym_action_repeat1] = {
    .visible = false,
    .named = false,
  },
};

static const TSSymbol ts_alias_sequences[PRODUCTION_ID_COUNT][MAX_ALIAS_SEQUENCE_LENGTH] = {
  [0] = {0},
};

static const uint16_t ts_non_terminal_alias_map[] = {
  0,
};

static const TSStateId ts_primary_state_ids[STATE_COUNT] = {
  [0] = 0,
  [1] = 1,
  [2] = 2,
  [3] = 3,
  [4] = 4,
  [5] = 5,
  [6] = 6,
  [7] = 7,
  [8] = 8,
  [9] = 9,
  [10] = 10,
  [11] = 11,
  [12] = 12,
  [13] = 13,
  [14] = 14,
  [15] = 15,
  [16] = 16,
  [17] = 12,
  [18] = 18,
  [19] = 13,
  [20] = 14,
  [21] = 21,
  [22] = 22,
  [23] = 23,
  [24] = 24,
  [25] = 25,
  [26] = 26,
  [27] = 27,
  [28] = 27,
  [29] = 29,
  [30] = 30,
  [31] = 31,
  [32] = 32,
};

static bool ts_lex(TSLexer *lexer, TSStateId state) {
  START_LEXER();
  eof = lexer->eof(lexer);
  switch (state) {
    case 0:
      if (eof) ADVANCE(19);
      if (lookahead == '(') ADVANCE(31);
      if (lookahead == ')') ADVANCE(33);
      if (lookahead == '+') ADVANCE(36);
      if (lookahead == ',') ADVANCE(32);
      if (lookahead == '-') ADVANCE(37);
      if (lookahead == '<') ADVANCE(28);
      if (lookahead == '>') ADVANCE(29);
      if (lookahead == '?') ADVANCE(38);
      if (lookahead == '@') ADVANCE(47);
      if (lookahead == '[') ADVANCE(26);
      if (lookahead == ']') ADVANCE(27);
      if (lookahead == 'a') ADVANCE(10);
      if (lookahead == 'f') ADVANCE(3);
      if (lookahead == 'g') ADVANCE(7);
      if (lookahead == 'l') ADVANCE(8);
      if (lookahead == 'n') ADVANCE(11);
      if (lookahead == 'o') ADVANCE(14);
      if (lookahead == 't') ADVANCE(15);
      if (lookahead == '\t' ||
          lookahead == '\n' ||
          lookahead == '\r' ||
          lookahead == ' ') SKIP(0)
      END_STATE();
    case 1:
      if (lookahead == '+') ADVANCE(36);
      if (lookahead == '-') ADVANCE(37);
      if (lookahead == '<') ADVANCE(28);
      if (lookahead == '?') ADVANCE(38);
      if (lookahead == '@') ADVANCE(47);
      if (lookahead == '[') ADVANCE(26);
      if (lookahead == 'f') ADVANCE(39);
      if (lookahead == 't') ADVANCE(43);
      if (lookahead == '\t' ||
          lookahead == '\n' ||
          lookahead == '\r' ||
          lookahead == ' ') SKIP(1)
      if (('/' <= lookahead && lookahead <= '9') ||
          ('A' <= lookahead && lookahead <= 'Z') ||
          lookahead == '_' ||
          ('a' <= lookahead && lookahead <= 'z')) ADVANCE(46);
      END_STATE();
    case 2:
      if (lookahead == '+') ADVANCE(36);
      if (lookahead == '-') ADVANCE(37);
      if (lookahead == '>') ADVANCE(29);
      if (lookahead == '?') ADVANCE(38);
      if (lookahead == ']') ADVANCE(27);
      if (lookahead == '\t' ||
          lookahead == '\n' ||
          lookahead == '\r' ||
          lookahead == ' ') SKIP(2)
      if (('/' <= lookahead && lookahead <= '9') ||
          ('A' <= lookahead && lookahead <= 'Z') ||
          lookahead == '_' ||
          ('a' <= lookahead && lookahead <= 'z')) ADVANCE(46);
      END_STATE();
    case 3:
      if (lookahead == 'a') ADVANCE(9);
      END_STATE();
    case 4:
      if (lookahead == 'd') ADVANCE(25);
      END_STATE();
    case 5:
      if (lookahead == 'e') ADVANCE(20);
      END_STATE();
    case 6:
      if (lookahead == 'e') ADVANCE(22);
      END_STATE();
    case 7:
      if (lookahead == 'f') ADVANCE(12);
      END_STATE();
    case 8:
      if (lookahead == 'f') ADVANCE(13);
      END_STATE();
    case 9:
      if (lookahead == 'l') ADVANCE(16);
      END_STATE();
    case 10:
      if (lookahead == 'n') ADVANCE(4);
      END_STATE();
    case 11:
      if (lookahead == 'o') ADVANCE(17);
      END_STATE();
    case 12:
      if (lookahead == 'p') ADVANCE(34);
      END_STATE();
    case 13:
      if (lookahead == 'p') ADVANCE(30);
      END_STATE();
    case 14:
      if (lookahead == 'r') ADVANCE(24);
      END_STATE();
    case 15:
      if (lookahead == 'r') ADVANCE(18);
      END_STATE();
    case 16:
      if (lookahead == 's') ADVANCE(6);
      END_STATE();
    case 17:
      if (lookahead == 't') ADVANCE(35);
      END_STATE();
    case 18:
      if (lookahead == 'u') ADVANCE(5);
      END_STATE();
    case 19:
      ACCEPT_TOKEN(ts_builtin_sym_end);
      END_STATE();
    case 20:
      ACCEPT_TOKEN(anon_sym_true);
      END_STATE();
    case 21:
      ACCEPT_TOKEN(anon_sym_true);
      if (('.' <= lookahead && lookahead <= '9') ||
          ('A' <= lookahead && lookahead <= 'Z') ||
          lookahead == '_' ||
          ('a' <= lookahead && lookahead <= 'z')) ADVANCE(46);
      END_STATE();
    case 22:
      ACCEPT_TOKEN(anon_sym_false);
      END_STATE();
    case 23:
      ACCEPT_TOKEN(anon_sym_false);
      if (('.' <= lookahead && lookahead <= '9') ||
          ('A' <= lookahead && lookahead <= 'Z') ||
          lookahead == '_' ||
          ('a' <= lookahead && lookahead <= 'z')) ADVANCE(46);
      END_STATE();
    case 24:
      ACCEPT_TOKEN(anon_sym_or);
      END_STATE();
    case 25:
      ACCEPT_TOKEN(anon_sym_and);
      END_STATE();
    case 26:
      ACCEPT_TOKEN(anon_sym_LBRACK);
      END_STATE();
    case 27:
      ACCEPT_TOKEN(anon_sym_RBRACK);
      END_STATE();
    case 28:
      ACCEPT_TOKEN(anon_sym_LT);
      END_STATE();
    case 29:
      ACCEPT_TOKEN(anon_sym_GT);
      END_STATE();
    case 30:
      ACCEPT_TOKEN(anon_sym_lfp);
      END_STATE();
    case 31:
      ACCEPT_TOKEN(anon_sym_LPAREN);
      END_STATE();
    case 32:
      ACCEPT_TOKEN(anon_sym_COMMA);
      END_STATE();
    case 33:
      ACCEPT_TOKEN(anon_sym_RPAREN);
      END_STATE();
    case 34:
      ACCEPT_TOKEN(anon_sym_gfp);
      END_STATE();
    case 35:
      ACCEPT_TOKEN(anon_sym_not);
      END_STATE();
    case 36:
      ACCEPT_TOKEN(anon_sym_PLUS);
      END_STATE();
    case 37:
      ACCEPT_TOKEN(anon_sym_DASH);
      END_STATE();
    case 38:
      ACCEPT_TOKEN(anon_sym_QMARK);
      END_STATE();
    case 39:
      ACCEPT_TOKEN(aux_sym_prop_label_token1);
      if (lookahead == 'a') ADVANCE(42);
      if (('.' <= lookahead && lookahead <= '9') ||
          ('A' <= lookahead && lookahead <= 'Z') ||
          lookahead == '_' ||
          ('b' <= lookahead && lookahead <= 'z')) ADVANCE(46);
      END_STATE();
    case 40:
      ACCEPT_TOKEN(aux_sym_prop_label_token1);
      if (lookahead == 'e') ADVANCE(21);
      if (('.' <= lookahead && lookahead <= '9') ||
          ('A' <= lookahead && lookahead <= 'Z') ||
          lookahead == '_' ||
          ('a' <= lookahead && lookahead <= 'z')) ADVANCE(46);
      END_STATE();
    case 41:
      ACCEPT_TOKEN(aux_sym_prop_label_token1);
      if (lookahead == 'e') ADVANCE(23);
      if (('.' <= lookahead && lookahead <= '9') ||
          ('A' <= lookahead && lookahead <= 'Z') ||
          lookahead == '_' ||
          ('a' <= lookahead && lookahead <= 'z')) ADVANCE(46);
      END_STATE();
    case 42:
      ACCEPT_TOKEN(aux_sym_prop_label_token1);
      if (lookahead == 'l') ADVANCE(44);
      if (('.' <= lookahead && lookahead <= '9') ||
          ('A' <= lookahead && lookahead <= 'Z') ||
          lookahead == '_' ||
          ('a' <= lookahead && lookahead <= 'z')) ADVANCE(46);
      END_STATE();
    case 43:
      ACCEPT_TOKEN(aux_sym_prop_label_token1);
      if (lookahead == 'r') ADVANCE(45);
      if (('.' <= lookahead && lookahead <= '9') ||
          ('A' <= lookahead && lookahead <= 'Z') ||
          lookahead == '_' ||
          ('a' <= lookahead && lookahead <= 'z')) ADVANCE(46);
      END_STATE();
    case 44:
      ACCEPT_TOKEN(aux_sym_prop_label_token1);
      if (lookahead == 's') ADVANCE(41);
      if (('.' <= lookahead && lookahead <= '9') ||
          ('A' <= lookahead && lookahead <= 'Z') ||
          lookahead == '_' ||
          ('a' <= lookahead && lookahead <= 'z')) ADVANCE(46);
      END_STATE();
    case 45:
      ACCEPT_TOKEN(aux_sym_prop_label_token1);
      if (lookahead == 'u') ADVANCE(40);
      if (('.' <= lookahead && lookahead <= '9') ||
          ('A' <= lookahead && lookahead <= 'Z') ||
          lookahead == '_' ||
          ('a' <= lookahead && lookahead <= 'z')) ADVANCE(46);
      END_STATE();
    case 46:
      ACCEPT_TOKEN(aux_sym_prop_label_token1);
      if (('.' <= lookahead && lookahead <= '9') ||
          ('A' <= lookahead && lookahead <= 'Z') ||
          lookahead == '_' ||
          ('a' <= lookahead && lookahead <= 'z')) ADVANCE(46);
      END_STATE();
    case 47:
      ACCEPT_TOKEN(sym_state_set_variable);
      if (('0' <= lookahead && lookahead <= '9') ||
          ('A' <= lookahead && lookahead <= 'Z') ||
          lookahead == '_' ||
          ('a' <= lookahead && lookahead <= 'z')) ADVANCE(47);
      END_STATE();
    default:
      return false;
  }
}

static const TSLexMode ts_lex_modes[STATE_COUNT] = {
  [0] = {.lex_state = 0},
  [1] = {.lex_state = 1},
  [2] = {.lex_state = 1},
  [3] = {.lex_state = 1},
  [4] = {.lex_state = 1},
  [5] = {.lex_state = 1},
  [6] = {.lex_state = 1},
  [7] = {.lex_state = 1},
  [8] = {.lex_state = 2},
  [9] = {.lex_state = 2},
  [10] = {.lex_state = 2},
  [11] = {.lex_state = 2},
  [12] = {.lex_state = 2},
  [13] = {.lex_state = 2},
  [14] = {.lex_state = 2},
  [15] = {.lex_state = 0},
  [16] = {.lex_state = 0},
  [17] = {.lex_state = 0},
  [18] = {.lex_state = 0},
  [19] = {.lex_state = 0},
  [20] = {.lex_state = 0},
  [21] = {.lex_state = 0},
  [22] = {.lex_state = 0},
  [23] = {.lex_state = 0},
  [24] = {.lex_state = 0},
  [25] = {.lex_state = 0},
  [26] = {.lex_state = 0},
  [27] = {.lex_state = 2},
  [28] = {.lex_state = 2},
  [29] = {.lex_state = 0},
  [30] = {.lex_state = 2},
  [31] = {.lex_state = 0},
  [32] = {.lex_state = 0},
};

static const uint16_t ts_parse_table[LARGE_STATE_COUNT][SYMBOL_COUNT] = {
  [0] = {
    [ts_builtin_sym_end] = ACTIONS(1),
    [anon_sym_true] = ACTIONS(1),
    [anon_sym_false] = ACTIONS(1),
    [anon_sym_or] = ACTIONS(1),
    [anon_sym_and] = ACTIONS(1),
    [anon_sym_LBRACK] = ACTIONS(1),
    [anon_sym_RBRACK] = ACTIONS(1),
    [anon_sym_LT] = ACTIONS(1),
    [anon_sym_GT] = ACTIONS(1),
    [anon_sym_lfp] = ACTIONS(1),
    [anon_sym_LPAREN] = ACTIONS(1),
    [anon_sym_COMMA] = ACTIONS(1),
    [anon_sym_RPAREN] = ACTIONS(1),
    [anon_sym_gfp] = ACTIONS(1),
    [anon_sym_not] = ACTIONS(1),
    [anon_sym_PLUS] = ACTIONS(1),
    [anon_sym_DASH] = ACTIONS(1),
    [anon_sym_QMARK] = ACTIONS(1),
    [sym_state_set_variable] = ACTIONS(1),
  },
  [1] = {
    [sym_source_file] = STATE(29),
    [sym_formula] = STATE(16),
    [sym_boolean] = STATE(15),
    [sym_or] = STATE(15),
    [sym_and] = STATE(15),
    [sym_empty_box] = STATE(15),
    [sym_empty_dia] = STATE(15),
    [sym_box] = STATE(15),
    [sym_dia] = STATE(15),
    [sym_prop] = STATE(15),
    [sym_sign] = STATE(27),
    [sym_prop_label] = STATE(17),
    [anon_sym_true] = ACTIONS(3),
    [anon_sym_false] = ACTIONS(3),
    [anon_sym_LBRACK] = ACTIONS(5),
    [anon_sym_LT] = ACTIONS(7),
    [anon_sym_PLUS] = ACTIONS(9),
    [anon_sym_DASH] = ACTIONS(9),
    [anon_sym_QMARK] = ACTIONS(9),
    [aux_sym_prop_label_token1] = ACTIONS(11),
    [sym_state_set_variable] = ACTIONS(13),
  },
  [2] = {
    [sym_formula] = STATE(26),
    [sym_boolean] = STATE(15),
    [sym_or] = STATE(15),
    [sym_and] = STATE(15),
    [sym_empty_box] = STATE(15),
    [sym_empty_dia] = STATE(15),
    [sym_box] = STATE(15),
    [sym_dia] = STATE(15),
    [sym_prop] = STATE(15),
    [sym_sign] = STATE(27),
    [sym_prop_label] = STATE(17),
    [anon_sym_true] = ACTIONS(3),
    [anon_sym_false] = ACTIONS(3),
    [anon_sym_LBRACK] = ACTIONS(5),
    [anon_sym_LT] = ACTIONS(7),
    [anon_sym_PLUS] = ACTIONS(9),
    [anon_sym_DASH] = ACTIONS(9),
    [anon_sym_QMARK] = ACTIONS(9),
    [aux_sym_prop_label_token1] = ACTIONS(11),
    [sym_state_set_variable] = ACTIONS(13),
  },
  [3] = {
    [sym_formula] = STATE(25),
    [sym_boolean] = STATE(15),
    [sym_or] = STATE(15),
    [sym_and] = STATE(15),
    [sym_empty_box] = STATE(15),
    [sym_empty_dia] = STATE(15),
    [sym_box] = STATE(15),
    [sym_dia] = STATE(15),
    [sym_prop] = STATE(15),
    [sym_sign] = STATE(27),
    [sym_prop_label] = STATE(17),
    [anon_sym_true] = ACTIONS(3),
    [anon_sym_false] = ACTIONS(3),
    [anon_sym_LBRACK] = ACTIONS(5),
    [anon_sym_LT] = ACTIONS(7),
    [anon_sym_PLUS] = ACTIONS(9),
    [anon_sym_DASH] = ACTIONS(9),
    [anon_sym_QMARK] = ACTIONS(9),
    [aux_sym_prop_label_token1] = ACTIONS(11),
    [sym_state_set_variable] = ACTIONS(13),
  },
  [4] = {
    [sym_formula] = STATE(24),
    [sym_boolean] = STATE(15),
    [sym_or] = STATE(15),
    [sym_and] = STATE(15),
    [sym_empty_box] = STATE(15),
    [sym_empty_dia] = STATE(15),
    [sym_box] = STATE(15),
    [sym_dia] = STATE(15),
    [sym_prop] = STATE(15),
    [sym_sign] = STATE(27),
    [sym_prop_label] = STATE(17),
    [anon_sym_true] = ACTIONS(3),
    [anon_sym_false] = ACTIONS(3),
    [anon_sym_LBRACK] = ACTIONS(5),
    [anon_sym_LT] = ACTIONS(7),
    [anon_sym_PLUS] = ACTIONS(9),
    [anon_sym_DASH] = ACTIONS(9),
    [anon_sym_QMARK] = ACTIONS(9),
    [aux_sym_prop_label_token1] = ACTIONS(11),
    [sym_state_set_variable] = ACTIONS(13),
  },
  [5] = {
    [sym_formula] = STATE(23),
    [sym_boolean] = STATE(15),
    [sym_or] = STATE(15),
    [sym_and] = STATE(15),
    [sym_empty_box] = STATE(15),
    [sym_empty_dia] = STATE(15),
    [sym_box] = STATE(15),
    [sym_dia] = STATE(15),
    [sym_prop] = STATE(15),
    [sym_sign] = STATE(27),
    [sym_prop_label] = STATE(17),
    [anon_sym_true] = ACTIONS(3),
    [anon_sym_false] = ACTIONS(3),
    [anon_sym_LBRACK] = ACTIONS(5),
    [anon_sym_LT] = ACTIONS(7),
    [anon_sym_PLUS] = ACTIONS(9),
    [anon_sym_DASH] = ACTIONS(9),
    [anon_sym_QMARK] = ACTIONS(9),
    [aux_sym_prop_label_token1] = ACTIONS(11),
    [sym_state_set_variable] = ACTIONS(13),
  },
  [6] = {
    [sym_formula] = STATE(22),
    [sym_boolean] = STATE(15),
    [sym_or] = STATE(15),
    [sym_and] = STATE(15),
    [sym_empty_box] = STATE(15),
    [sym_empty_dia] = STATE(15),
    [sym_box] = STATE(15),
    [sym_dia] = STATE(15),
    [sym_prop] = STATE(15),
    [sym_sign] = STATE(27),
    [sym_prop_label] = STATE(17),
    [anon_sym_true] = ACTIONS(3),
    [anon_sym_false] = ACTIONS(3),
    [anon_sym_LBRACK] = ACTIONS(5),
    [anon_sym_LT] = ACTIONS(7),
    [anon_sym_PLUS] = ACTIONS(9),
    [anon_sym_DASH] = ACTIONS(9),
    [anon_sym_QMARK] = ACTIONS(9),
    [aux_sym_prop_label_token1] = ACTIONS(11),
    [sym_state_set_variable] = ACTIONS(13),
  },
  [7] = {
    [sym_formula] = STATE(21),
    [sym_boolean] = STATE(15),
    [sym_or] = STATE(15),
    [sym_and] = STATE(15),
    [sym_empty_box] = STATE(15),
    [sym_empty_dia] = STATE(15),
    [sym_box] = STATE(15),
    [sym_dia] = STATE(15),
    [sym_prop] = STATE(15),
    [sym_sign] = STATE(27),
    [sym_prop_label] = STATE(17),
    [anon_sym_true] = ACTIONS(3),
    [anon_sym_false] = ACTIONS(3),
    [anon_sym_LBRACK] = ACTIONS(5),
    [anon_sym_LT] = ACTIONS(7),
    [anon_sym_PLUS] = ACTIONS(9),
    [anon_sym_DASH] = ACTIONS(9),
    [anon_sym_QMARK] = ACTIONS(9),
    [aux_sym_prop_label_token1] = ACTIONS(11),
    [sym_state_set_variable] = ACTIONS(13),
  },
};

static const uint16_t ts_small_parse_table[] = {
  [0] = 6,
    ACTIONS(17), 1,
      aux_sym_prop_label_token1,
    STATE(12), 1,
      sym_prop_label,
    STATE(28), 1,
      sym_sign,
    ACTIONS(15), 2,
      anon_sym_RBRACK,
      anon_sym_GT,
    STATE(10), 2,
      sym_prop,
      aux_sym_action_repeat1,
    ACTIONS(9), 3,
      anon_sym_PLUS,
      anon_sym_DASH,
      anon_sym_QMARK,
  [23] = 7,
    ACTIONS(17), 1,
      aux_sym_prop_label_token1,
    ACTIONS(19), 1,
      anon_sym_GT,
    STATE(12), 1,
      sym_prop_label,
    STATE(28), 1,
      sym_sign,
    STATE(31), 1,
      sym_action,
    STATE(8), 2,
      sym_prop,
      aux_sym_action_repeat1,
    ACTIONS(9), 3,
      anon_sym_PLUS,
      anon_sym_DASH,
      anon_sym_QMARK,
  [48] = 6,
    ACTIONS(26), 1,
      aux_sym_prop_label_token1,
    STATE(12), 1,
      sym_prop_label,
    STATE(28), 1,
      sym_sign,
    ACTIONS(21), 2,
      anon_sym_RBRACK,
      anon_sym_GT,
    STATE(10), 2,
      sym_prop,
      aux_sym_action_repeat1,
    ACTIONS(23), 3,
      anon_sym_PLUS,
      anon_sym_DASH,
      anon_sym_QMARK,
  [71] = 7,
    ACTIONS(17), 1,
      aux_sym_prop_label_token1,
    ACTIONS(29), 1,
      anon_sym_RBRACK,
    STATE(12), 1,
      sym_prop_label,
    STATE(28), 1,
      sym_sign,
    STATE(32), 1,
      sym_action,
    STATE(8), 2,
      sym_prop,
      aux_sym_action_repeat1,
    ACTIONS(9), 3,
      anon_sym_PLUS,
      anon_sym_DASH,
      anon_sym_QMARK,
  [96] = 1,
    ACTIONS(31), 6,
      anon_sym_RBRACK,
      anon_sym_GT,
      anon_sym_PLUS,
      anon_sym_DASH,
      anon_sym_QMARK,
      aux_sym_prop_label_token1,
  [105] = 1,
    ACTIONS(33), 6,
      anon_sym_RBRACK,
      anon_sym_GT,
      anon_sym_PLUS,
      anon_sym_DASH,
      anon_sym_QMARK,
      aux_sym_prop_label_token1,
  [114] = 1,
    ACTIONS(35), 6,
      anon_sym_RBRACK,
      anon_sym_GT,
      anon_sym_PLUS,
      anon_sym_DASH,
      anon_sym_QMARK,
      aux_sym_prop_label_token1,
  [123] = 1,
    ACTIONS(37), 3,
      ts_builtin_sym_end,
      anon_sym_or,
      anon_sym_and,
  [129] = 3,
    ACTIONS(39), 1,
      ts_builtin_sym_end,
    ACTIONS(41), 1,
      anon_sym_or,
    ACTIONS(43), 1,
      anon_sym_and,
  [139] = 1,
    ACTIONS(31), 3,
      ts_builtin_sym_end,
      anon_sym_or,
      anon_sym_and,
  [145] = 1,
    ACTIONS(45), 3,
      ts_builtin_sym_end,
      anon_sym_or,
      anon_sym_and,
  [151] = 1,
    ACTIONS(33), 3,
      ts_builtin_sym_end,
      anon_sym_or,
      anon_sym_and,
  [157] = 1,
    ACTIONS(35), 3,
      ts_builtin_sym_end,
      anon_sym_or,
      anon_sym_and,
  [163] = 1,
    ACTIONS(47), 3,
      ts_builtin_sym_end,
      anon_sym_or,
      anon_sym_and,
  [169] = 1,
    ACTIONS(49), 3,
      ts_builtin_sym_end,
      anon_sym_or,
      anon_sym_and,
  [175] = 1,
    ACTIONS(51), 3,
      ts_builtin_sym_end,
      anon_sym_or,
      anon_sym_and,
  [181] = 1,
    ACTIONS(53), 3,
      ts_builtin_sym_end,
      anon_sym_or,
      anon_sym_and,
  [187] = 1,
    ACTIONS(55), 3,
      ts_builtin_sym_end,
      anon_sym_or,
      anon_sym_and,
  [193] = 1,
    ACTIONS(57), 3,
      ts_builtin_sym_end,
      anon_sym_or,
      anon_sym_and,
  [199] = 2,
    ACTIONS(59), 1,
      aux_sym_prop_label_token1,
    STATE(20), 1,
      sym_prop_label,
  [206] = 2,
    ACTIONS(17), 1,
      aux_sym_prop_label_token1,
    STATE(14), 1,
      sym_prop_label,
  [213] = 1,
    ACTIONS(61), 1,
      ts_builtin_sym_end,
  [217] = 1,
    ACTIONS(63), 1,
      aux_sym_prop_label_token1,
  [221] = 1,
    ACTIONS(65), 1,
      anon_sym_GT,
  [225] = 1,
    ACTIONS(67), 1,
      anon_sym_RBRACK,
};

static const uint32_t ts_small_parse_table_map[] = {
  [SMALL_STATE(8)] = 0,
  [SMALL_STATE(9)] = 23,
  [SMALL_STATE(10)] = 48,
  [SMALL_STATE(11)] = 71,
  [SMALL_STATE(12)] = 96,
  [SMALL_STATE(13)] = 105,
  [SMALL_STATE(14)] = 114,
  [SMALL_STATE(15)] = 123,
  [SMALL_STATE(16)] = 129,
  [SMALL_STATE(17)] = 139,
  [SMALL_STATE(18)] = 145,
  [SMALL_STATE(19)] = 151,
  [SMALL_STATE(20)] = 157,
  [SMALL_STATE(21)] = 163,
  [SMALL_STATE(22)] = 169,
  [SMALL_STATE(23)] = 175,
  [SMALL_STATE(24)] = 181,
  [SMALL_STATE(25)] = 187,
  [SMALL_STATE(26)] = 193,
  [SMALL_STATE(27)] = 199,
  [SMALL_STATE(28)] = 206,
  [SMALL_STATE(29)] = 213,
  [SMALL_STATE(30)] = 217,
  [SMALL_STATE(31)] = 221,
  [SMALL_STATE(32)] = 225,
};

static const TSParseActionEntry ts_parse_actions[] = {
  [0] = {.entry = {.count = 0, .reusable = false}},
  [1] = {.entry = {.count = 1, .reusable = false}}, RECOVER(),
  [3] = {.entry = {.count = 1, .reusable = false}}, SHIFT(18),
  [5] = {.entry = {.count = 1, .reusable = true}}, SHIFT(11),
  [7] = {.entry = {.count = 1, .reusable = true}}, SHIFT(9),
  [9] = {.entry = {.count = 1, .reusable = true}}, SHIFT(30),
  [11] = {.entry = {.count = 1, .reusable = false}}, SHIFT(19),
  [13] = {.entry = {.count = 1, .reusable = true}}, SHIFT(15),
  [15] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_action, 1),
  [17] = {.entry = {.count = 1, .reusable = true}}, SHIFT(13),
  [19] = {.entry = {.count = 1, .reusable = true}}, SHIFT(6),
  [21] = {.entry = {.count = 1, .reusable = true}}, REDUCE(aux_sym_action_repeat1, 2),
  [23] = {.entry = {.count = 2, .reusable = true}}, REDUCE(aux_sym_action_repeat1, 2), SHIFT_REPEAT(30),
  [26] = {.entry = {.count = 2, .reusable = true}}, REDUCE(aux_sym_action_repeat1, 2), SHIFT_REPEAT(13),
  [29] = {.entry = {.count = 1, .reusable = true}}, SHIFT(7),
  [31] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_prop, 1),
  [33] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_prop_label, 1),
  [35] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_prop, 2),
  [37] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_formula, 1),
  [39] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_source_file, 1),
  [41] = {.entry = {.count = 1, .reusable = true}}, SHIFT(5),
  [43] = {.entry = {.count = 1, .reusable = true}}, SHIFT(4),
  [45] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_boolean, 1),
  [47] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_empty_box, 3),
  [49] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_empty_dia, 3),
  [51] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_or, 3),
  [53] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_and, 3),
  [55] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_box, 4),
  [57] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_dia, 4),
  [59] = {.entry = {.count = 1, .reusable = true}}, SHIFT(19),
  [61] = {.entry = {.count = 1, .reusable = true}},  ACCEPT_INPUT(),
  [63] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_sign, 1),
  [65] = {.entry = {.count = 1, .reusable = true}}, SHIFT(2),
  [67] = {.entry = {.count = 1, .reusable = true}}, SHIFT(3),
};

#ifdef __cplusplus
extern "C" {
#endif
#ifdef _WIN32
#define extern __declspec(dllexport)
#endif

extern const TSLanguage *tree_sitter_ModalFormula(void) {
  static const TSLanguage language = {
    .version = LANGUAGE_VERSION,
    .symbol_count = SYMBOL_COUNT,
    .alias_count = ALIAS_COUNT,
    .token_count = TOKEN_COUNT,
    .external_token_count = EXTERNAL_TOKEN_COUNT,
    .state_count = STATE_COUNT,
    .large_state_count = LARGE_STATE_COUNT,
    .production_id_count = PRODUCTION_ID_COUNT,
    .field_count = FIELD_COUNT,
    .max_alias_sequence_length = MAX_ALIAS_SEQUENCE_LENGTH,
    .parse_table = &ts_parse_table[0][0],
    .small_parse_table = ts_small_parse_table,
    .small_parse_table_map = ts_small_parse_table_map,
    .parse_actions = ts_parse_actions,
    .symbol_names = ts_symbol_names,
    .symbol_metadata = ts_symbol_metadata,
    .public_symbol_map = ts_symbol_map,
    .alias_map = ts_non_terminal_alias_map,
    .alias_sequences = &ts_alias_sequences[0][0],
    .lex_modes = ts_lex_modes,
    .lex_fn = ts_lex,
    .primary_state_ids = ts_primary_state_ids,
  };
  return &language;
}
#ifdef __cplusplus
}
#endif
