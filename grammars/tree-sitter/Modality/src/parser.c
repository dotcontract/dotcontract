#include <tree_sitter/parser.h>

#if defined(__GNUC__) || defined(__clang__)
#pragma GCC diagnostic push
#pragma GCC diagnostic ignored "-Wmissing-field-initializers"
#endif

#define LANGUAGE_VERSION 14
#define STATE_COUNT 35
#define LARGE_STATE_COUNT 2
#define SYMBOL_COUNT 44
#define ALIAS_COUNT 0
#define TOKEN_COUNT 29
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
  anon_sym_always = 15,
  anon_sym_until = 16,
  anon_sym_sometimes = 17,
  anon_sym_can = 18,
  anon_sym_must = 19,
  anon_sym_PLUS = 20,
  anon_sym_DASH = 21,
  anon_sym_QMARK = 22,
  aux_sym_prop_label_token1 = 23,
  anon_sym_DQUOTE = 24,
  anon_sym_SQUOTE = 25,
  sym_escape_sequence = 26,
  sym_number = 27,
  sym_state_set_variable = 28,
  sym_source_file = 29,
  sym_formula = 30,
  sym_boolean = 31,
  sym_or = 32,
  sym_and = 33,
  sym_empty_box = 34,
  sym_empty_dia = 35,
  sym_box = 36,
  sym_dia = 37,
  sym_action = 38,
  sym_prop = 39,
  sym_sign = 40,
  sym_prop_label = 41,
  sym_pred = 42,
  aux_sym_action_repeat1 = 43,
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
  [anon_sym_always] = "always",
  [anon_sym_until] = "until",
  [anon_sym_sometimes] = "sometimes",
  [anon_sym_can] = "can",
  [anon_sym_must] = "must",
  [anon_sym_PLUS] = "+",
  [anon_sym_DASH] = "-",
  [anon_sym_QMARK] = "\?",
  [aux_sym_prop_label_token1] = "prop_label_token1",
  [anon_sym_DQUOTE] = "\"",
  [anon_sym_SQUOTE] = "'",
  [sym_escape_sequence] = "escape_sequence",
  [sym_number] = "number",
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
  [sym_pred] = "pred",
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
  [anon_sym_always] = anon_sym_always,
  [anon_sym_until] = anon_sym_until,
  [anon_sym_sometimes] = anon_sym_sometimes,
  [anon_sym_can] = anon_sym_can,
  [anon_sym_must] = anon_sym_must,
  [anon_sym_PLUS] = anon_sym_PLUS,
  [anon_sym_DASH] = anon_sym_DASH,
  [anon_sym_QMARK] = anon_sym_QMARK,
  [aux_sym_prop_label_token1] = aux_sym_prop_label_token1,
  [anon_sym_DQUOTE] = anon_sym_DQUOTE,
  [anon_sym_SQUOTE] = anon_sym_SQUOTE,
  [sym_escape_sequence] = sym_escape_sequence,
  [sym_number] = sym_number,
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
  [sym_pred] = sym_pred,
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
  [anon_sym_always] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_until] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_sometimes] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_can] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_must] = {
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
  [anon_sym_DQUOTE] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_SQUOTE] = {
    .visible = true,
    .named = false,
  },
  [sym_escape_sequence] = {
    .visible = true,
    .named = true,
  },
  [sym_number] = {
    .visible = true,
    .named = true,
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
  [sym_pred] = {
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
  [17] = 16,
  [18] = 18,
  [19] = 19,
  [20] = 12,
  [21] = 21,
  [22] = 22,
  [23] = 13,
  [24] = 24,
  [25] = 25,
  [26] = 26,
  [27] = 27,
  [28] = 28,
  [29] = 14,
  [30] = 15,
  [31] = 31,
  [32] = 32,
  [33] = 33,
  [34] = 34,
};

static bool ts_lex(TSLexer *lexer, TSStateId state) {
  START_LEXER();
  eof = lexer->eof(lexer);
  switch (state) {
    case 0:
      if (eof) ADVANCE(56);
      if (lookahead == '"') ADVANCE(89);
      if (lookahead == '\'') ADVANCE(90);
      if (lookahead == '(') ADVANCE(68);
      if (lookahead == ')') ADVANCE(70);
      if (lookahead == '+') ADVANCE(78);
      if (lookahead == ',') ADVANCE(69);
      if (lookahead == '-') ADVANCE(79);
      if (lookahead == '.') ADVANCE(47);
      if (lookahead == '0') ADVANCE(95);
      if (lookahead == '<') ADVANCE(65);
      if (lookahead == '>') ADVANCE(66);
      if (lookahead == '?') ADVANCE(80);
      if (lookahead == '@') ADVANCE(104);
      if (lookahead == '[') ADVANCE(63);
      if (lookahead == '\\') ADVANCE(36);
      if (lookahead == ']') ADVANCE(64);
      if (lookahead == 'a') ADVANCE(15);
      if (lookahead == 'c') ADVANCE(5);
      if (lookahead == 'f') ADVANCE(3);
      if (lookahead == 'g') ADVANCE(11);
      if (lookahead == 'l') ADVANCE(12);
      if (lookahead == 'm') ADVANCE(37);
      if (lookahead == 'n') ADVANCE(22);
      if (lookahead == 'o') ADVANCE(26);
      if (lookahead == 's') ADVANCE(23);
      if (lookahead == 't') ADVANCE(27);
      if (lookahead == 'u') ADVANCE(21);
      if (lookahead == '\t' ||
          lookahead == '\n' ||
          lookahead == '\r' ||
          lookahead == ' ') SKIP(55)
      if (('1' <= lookahead && lookahead <= '9')) ADVANCE(96);
      END_STATE();
    case 1:
      if (lookahead == ')') ADVANCE(70);
      if (lookahead == '+') ADVANCE(78);
      if (lookahead == '-') ADVANCE(79);
      if (lookahead == '<') ADVANCE(65);
      if (lookahead == '?') ADVANCE(80);
      if (lookahead == '@') ADVANCE(104);
      if (lookahead == '[') ADVANCE(63);
      if (lookahead == 'f') ADVANCE(81);
      if (lookahead == 't') ADVANCE(85);
      if (lookahead == '\t' ||
          lookahead == '\n' ||
          lookahead == '\r' ||
          lookahead == ' ') SKIP(1)
      if (('/' <= lookahead && lookahead <= '9') ||
          ('A' <= lookahead && lookahead <= 'Z') ||
          lookahead == '_' ||
          ('a' <= lookahead && lookahead <= 'z')) ADVANCE(88);
      END_STATE();
    case 2:
      if (lookahead == ')') ADVANCE(70);
      if (lookahead == '+') ADVANCE(78);
      if (lookahead == '-') ADVANCE(79);
      if (lookahead == '>') ADVANCE(66);
      if (lookahead == '?') ADVANCE(80);
      if (lookahead == ']') ADVANCE(64);
      if (lookahead == '\t' ||
          lookahead == '\n' ||
          lookahead == '\r' ||
          lookahead == ' ') SKIP(2)
      if (('/' <= lookahead && lookahead <= '9') ||
          ('A' <= lookahead && lookahead <= 'Z') ||
          lookahead == '_' ||
          ('a' <= lookahead && lookahead <= 'z')) ADVANCE(88);
      END_STATE();
    case 3:
      if (lookahead == 'a') ADVANCE(17);
      END_STATE();
    case 4:
      if (lookahead == 'a') ADVANCE(40);
      END_STATE();
    case 5:
      if (lookahead == 'a') ADVANCE(20);
      END_STATE();
    case 6:
      if (lookahead == 'd') ADVANCE(62);
      END_STATE();
    case 7:
      if (lookahead == 'e') ADVANCE(57);
      END_STATE();
    case 8:
      if (lookahead == 'e') ADVANCE(59);
      END_STATE();
    case 9:
      if (lookahead == 'e') ADVANCE(29);
      END_STATE();
    case 10:
      if (lookahead == 'e') ADVANCE(35);
      END_STATE();
    case 11:
      if (lookahead == 'f') ADVANCE(24);
      END_STATE();
    case 12:
      if (lookahead == 'f') ADVANCE(25);
      END_STATE();
    case 13:
      if (lookahead == 'i') ADVANCE(16);
      END_STATE();
    case 14:
      if (lookahead == 'i') ADVANCE(19);
      END_STATE();
    case 15:
      if (lookahead == 'l') ADVANCE(39);
      if (lookahead == 'n') ADVANCE(6);
      END_STATE();
    case 16:
      if (lookahead == 'l') ADVANCE(74);
      END_STATE();
    case 17:
      if (lookahead == 'l') ADVANCE(31);
      END_STATE();
    case 18:
      if (lookahead == 'm') ADVANCE(10);
      END_STATE();
    case 19:
      if (lookahead == 'm') ADVANCE(9);
      END_STATE();
    case 20:
      if (lookahead == 'n') ADVANCE(76);
      END_STATE();
    case 21:
      if (lookahead == 'n') ADVANCE(33);
      END_STATE();
    case 22:
      if (lookahead == 'o') ADVANCE(32);
      END_STATE();
    case 23:
      if (lookahead == 'o') ADVANCE(18);
      END_STATE();
    case 24:
      if (lookahead == 'p') ADVANCE(71);
      END_STATE();
    case 25:
      if (lookahead == 'p') ADVANCE(67);
      END_STATE();
    case 26:
      if (lookahead == 'r') ADVANCE(61);
      END_STATE();
    case 27:
      if (lookahead == 'r') ADVANCE(38);
      END_STATE();
    case 28:
      if (lookahead == 's') ADVANCE(73);
      END_STATE();
    case 29:
      if (lookahead == 's') ADVANCE(75);
      END_STATE();
    case 30:
      if (lookahead == 's') ADVANCE(34);
      END_STATE();
    case 31:
      if (lookahead == 's') ADVANCE(8);
      END_STATE();
    case 32:
      if (lookahead == 't') ADVANCE(72);
      END_STATE();
    case 33:
      if (lookahead == 't') ADVANCE(13);
      END_STATE();
    case 34:
      if (lookahead == 't') ADVANCE(77);
      END_STATE();
    case 35:
      if (lookahead == 't') ADVANCE(14);
      END_STATE();
    case 36:
      if (lookahead == 'u') ADVANCE(41);
      if (lookahead == 'x') ADVANCE(54);
      if (('0' <= lookahead && lookahead <= '7')) ADVANCE(93);
      if (lookahead != 0) ADVANCE(91);
      END_STATE();
    case 37:
      if (lookahead == 'u') ADVANCE(30);
      END_STATE();
    case 38:
      if (lookahead == 'u') ADVANCE(7);
      END_STATE();
    case 39:
      if (lookahead == 'w') ADVANCE(4);
      END_STATE();
    case 40:
      if (lookahead == 'y') ADVANCE(28);
      END_STATE();
    case 41:
      if (lookahead == '{') ADVANCE(52);
      if (('0' <= lookahead && lookahead <= '9') ||
          ('A' <= lookahead && lookahead <= 'F') ||
          ('a' <= lookahead && lookahead <= 'f')) ADVANCE(53);
      END_STATE();
    case 42:
      if (lookahead == '}') ADVANCE(91);
      if (('0' <= lookahead && lookahead <= '9') ||
          ('A' <= lookahead && lookahead <= 'F') ||
          ('a' <= lookahead && lookahead <= 'f')) ADVANCE(42);
      END_STATE();
    case 43:
      if (lookahead == '+' ||
          lookahead == '-') ADVANCE(49);
      if (('0' <= lookahead && lookahead <= '9')) ADVANCE(101);
      END_STATE();
    case 44:
      if (lookahead == '0' ||
          lookahead == '1') ADVANCE(97);
      END_STATE();
    case 45:
      if (('0' <= lookahead && lookahead <= '7')) ADVANCE(98);
      END_STATE();
    case 46:
      if (('0' <= lookahead && lookahead <= '9')) ADVANCE(96);
      END_STATE();
    case 47:
      if (('0' <= lookahead && lookahead <= '9')) ADVANCE(102);
      END_STATE();
    case 48:
      if (('0' <= lookahead && lookahead <= '9')) ADVANCE(100);
      END_STATE();
    case 49:
      if (('0' <= lookahead && lookahead <= '9')) ADVANCE(101);
      END_STATE();
    case 50:
      if (('0' <= lookahead && lookahead <= '9') ||
          ('A' <= lookahead && lookahead <= 'F') ||
          ('a' <= lookahead && lookahead <= 'f')) ADVANCE(91);
      END_STATE();
    case 51:
      if (('0' <= lookahead && lookahead <= '9') ||
          ('A' <= lookahead && lookahead <= 'F') ||
          ('a' <= lookahead && lookahead <= 'f')) ADVANCE(99);
      END_STATE();
    case 52:
      if (('0' <= lookahead && lookahead <= '9') ||
          ('A' <= lookahead && lookahead <= 'F') ||
          ('a' <= lookahead && lookahead <= 'f')) ADVANCE(42);
      END_STATE();
    case 53:
      if (('0' <= lookahead && lookahead <= '9') ||
          ('A' <= lookahead && lookahead <= 'F') ||
          ('a' <= lookahead && lookahead <= 'f')) ADVANCE(54);
      END_STATE();
    case 54:
      if (('0' <= lookahead && lookahead <= '9') ||
          ('A' <= lookahead && lookahead <= 'F') ||
          ('a' <= lookahead && lookahead <= 'f')) ADVANCE(50);
      END_STATE();
    case 55:
      if (eof) ADVANCE(56);
      if (lookahead == '"') ADVANCE(89);
      if (lookahead == '\'') ADVANCE(90);
      if (lookahead == '(') ADVANCE(68);
      if (lookahead == ')') ADVANCE(70);
      if (lookahead == '+') ADVANCE(78);
      if (lookahead == ',') ADVANCE(69);
      if (lookahead == '-') ADVANCE(79);
      if (lookahead == '.') ADVANCE(47);
      if (lookahead == '0') ADVANCE(95);
      if (lookahead == '<') ADVANCE(65);
      if (lookahead == '>') ADVANCE(66);
      if (lookahead == '?') ADVANCE(80);
      if (lookahead == '@') ADVANCE(104);
      if (lookahead == '[') ADVANCE(63);
      if (lookahead == ']') ADVANCE(64);
      if (lookahead == 'a') ADVANCE(15);
      if (lookahead == 'c') ADVANCE(5);
      if (lookahead == 'f') ADVANCE(3);
      if (lookahead == 'g') ADVANCE(11);
      if (lookahead == 'l') ADVANCE(12);
      if (lookahead == 'm') ADVANCE(37);
      if (lookahead == 'n') ADVANCE(22);
      if (lookahead == 'o') ADVANCE(26);
      if (lookahead == 's') ADVANCE(23);
      if (lookahead == 't') ADVANCE(27);
      if (lookahead == 'u') ADVANCE(21);
      if (lookahead == '\t' ||
          lookahead == '\n' ||
          lookahead == '\r' ||
          lookahead == ' ') SKIP(55)
      if (('1' <= lookahead && lookahead <= '9')) ADVANCE(96);
      END_STATE();
    case 56:
      ACCEPT_TOKEN(ts_builtin_sym_end);
      END_STATE();
    case 57:
      ACCEPT_TOKEN(anon_sym_true);
      END_STATE();
    case 58:
      ACCEPT_TOKEN(anon_sym_true);
      if (('.' <= lookahead && lookahead <= '9') ||
          ('A' <= lookahead && lookahead <= 'Z') ||
          lookahead == '_' ||
          ('a' <= lookahead && lookahead <= 'z')) ADVANCE(88);
      END_STATE();
    case 59:
      ACCEPT_TOKEN(anon_sym_false);
      END_STATE();
    case 60:
      ACCEPT_TOKEN(anon_sym_false);
      if (('.' <= lookahead && lookahead <= '9') ||
          ('A' <= lookahead && lookahead <= 'Z') ||
          lookahead == '_' ||
          ('a' <= lookahead && lookahead <= 'z')) ADVANCE(88);
      END_STATE();
    case 61:
      ACCEPT_TOKEN(anon_sym_or);
      END_STATE();
    case 62:
      ACCEPT_TOKEN(anon_sym_and);
      END_STATE();
    case 63:
      ACCEPT_TOKEN(anon_sym_LBRACK);
      END_STATE();
    case 64:
      ACCEPT_TOKEN(anon_sym_RBRACK);
      END_STATE();
    case 65:
      ACCEPT_TOKEN(anon_sym_LT);
      END_STATE();
    case 66:
      ACCEPT_TOKEN(anon_sym_GT);
      END_STATE();
    case 67:
      ACCEPT_TOKEN(anon_sym_lfp);
      END_STATE();
    case 68:
      ACCEPT_TOKEN(anon_sym_LPAREN);
      END_STATE();
    case 69:
      ACCEPT_TOKEN(anon_sym_COMMA);
      END_STATE();
    case 70:
      ACCEPT_TOKEN(anon_sym_RPAREN);
      END_STATE();
    case 71:
      ACCEPT_TOKEN(anon_sym_gfp);
      END_STATE();
    case 72:
      ACCEPT_TOKEN(anon_sym_not);
      END_STATE();
    case 73:
      ACCEPT_TOKEN(anon_sym_always);
      END_STATE();
    case 74:
      ACCEPT_TOKEN(anon_sym_until);
      END_STATE();
    case 75:
      ACCEPT_TOKEN(anon_sym_sometimes);
      END_STATE();
    case 76:
      ACCEPT_TOKEN(anon_sym_can);
      END_STATE();
    case 77:
      ACCEPT_TOKEN(anon_sym_must);
      END_STATE();
    case 78:
      ACCEPT_TOKEN(anon_sym_PLUS);
      END_STATE();
    case 79:
      ACCEPT_TOKEN(anon_sym_DASH);
      END_STATE();
    case 80:
      ACCEPT_TOKEN(anon_sym_QMARK);
      END_STATE();
    case 81:
      ACCEPT_TOKEN(aux_sym_prop_label_token1);
      if (lookahead == 'a') ADVANCE(84);
      if (('.' <= lookahead && lookahead <= '9') ||
          ('A' <= lookahead && lookahead <= 'Z') ||
          lookahead == '_' ||
          ('b' <= lookahead && lookahead <= 'z')) ADVANCE(88);
      END_STATE();
    case 82:
      ACCEPT_TOKEN(aux_sym_prop_label_token1);
      if (lookahead == 'e') ADVANCE(58);
      if (('.' <= lookahead && lookahead <= '9') ||
          ('A' <= lookahead && lookahead <= 'Z') ||
          lookahead == '_' ||
          ('a' <= lookahead && lookahead <= 'z')) ADVANCE(88);
      END_STATE();
    case 83:
      ACCEPT_TOKEN(aux_sym_prop_label_token1);
      if (lookahead == 'e') ADVANCE(60);
      if (('.' <= lookahead && lookahead <= '9') ||
          ('A' <= lookahead && lookahead <= 'Z') ||
          lookahead == '_' ||
          ('a' <= lookahead && lookahead <= 'z')) ADVANCE(88);
      END_STATE();
    case 84:
      ACCEPT_TOKEN(aux_sym_prop_label_token1);
      if (lookahead == 'l') ADVANCE(86);
      if (('.' <= lookahead && lookahead <= '9') ||
          ('A' <= lookahead && lookahead <= 'Z') ||
          lookahead == '_' ||
          ('a' <= lookahead && lookahead <= 'z')) ADVANCE(88);
      END_STATE();
    case 85:
      ACCEPT_TOKEN(aux_sym_prop_label_token1);
      if (lookahead == 'r') ADVANCE(87);
      if (('.' <= lookahead && lookahead <= '9') ||
          ('A' <= lookahead && lookahead <= 'Z') ||
          lookahead == '_' ||
          ('a' <= lookahead && lookahead <= 'z')) ADVANCE(88);
      END_STATE();
    case 86:
      ACCEPT_TOKEN(aux_sym_prop_label_token1);
      if (lookahead == 's') ADVANCE(83);
      if (('.' <= lookahead && lookahead <= '9') ||
          ('A' <= lookahead && lookahead <= 'Z') ||
          lookahead == '_' ||
          ('a' <= lookahead && lookahead <= 'z')) ADVANCE(88);
      END_STATE();
    case 87:
      ACCEPT_TOKEN(aux_sym_prop_label_token1);
      if (lookahead == 'u') ADVANCE(82);
      if (('.' <= lookahead && lookahead <= '9') ||
          ('A' <= lookahead && lookahead <= 'Z') ||
          lookahead == '_' ||
          ('a' <= lookahead && lookahead <= 'z')) ADVANCE(88);
      END_STATE();
    case 88:
      ACCEPT_TOKEN(aux_sym_prop_label_token1);
      if (('.' <= lookahead && lookahead <= '9') ||
          ('A' <= lookahead && lookahead <= 'Z') ||
          lookahead == '_' ||
          ('a' <= lookahead && lookahead <= 'z')) ADVANCE(88);
      END_STATE();
    case 89:
      ACCEPT_TOKEN(anon_sym_DQUOTE);
      END_STATE();
    case 90:
      ACCEPT_TOKEN(anon_sym_SQUOTE);
      END_STATE();
    case 91:
      ACCEPT_TOKEN(sym_escape_sequence);
      END_STATE();
    case 92:
      ACCEPT_TOKEN(sym_escape_sequence);
      if (('0' <= lookahead && lookahead <= '7')) ADVANCE(91);
      END_STATE();
    case 93:
      ACCEPT_TOKEN(sym_escape_sequence);
      if (('0' <= lookahead && lookahead <= '7')) ADVANCE(92);
      END_STATE();
    case 94:
      ACCEPT_TOKEN(sym_number);
      END_STATE();
    case 95:
      ACCEPT_TOKEN(sym_number);
      if (lookahead == '.') ADVANCE(103);
      if (lookahead == '0') ADVANCE(100);
      if (lookahead == 'B' ||
          lookahead == 'b') ADVANCE(44);
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(43);
      if (lookahead == 'O' ||
          lookahead == 'o') ADVANCE(45);
      if (lookahead == 'X' ||
          lookahead == 'x') ADVANCE(51);
      if (lookahead == '_') ADVANCE(48);
      if (lookahead == 'n') ADVANCE(94);
      if (('1' <= lookahead && lookahead <= '9')) ADVANCE(96);
      END_STATE();
    case 96:
      ACCEPT_TOKEN(sym_number);
      if (lookahead == '.') ADVANCE(103);
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(43);
      if (lookahead == '_') ADVANCE(46);
      if (lookahead == 'n') ADVANCE(94);
      if (('0' <= lookahead && lookahead <= '9')) ADVANCE(96);
      END_STATE();
    case 97:
      ACCEPT_TOKEN(sym_number);
      if (lookahead == '_') ADVANCE(44);
      if (lookahead == 'n') ADVANCE(94);
      if (lookahead == '0' ||
          lookahead == '1') ADVANCE(97);
      END_STATE();
    case 98:
      ACCEPT_TOKEN(sym_number);
      if (lookahead == '_') ADVANCE(45);
      if (lookahead == 'n') ADVANCE(94);
      if (('0' <= lookahead && lookahead <= '7')) ADVANCE(98);
      END_STATE();
    case 99:
      ACCEPT_TOKEN(sym_number);
      if (lookahead == '_') ADVANCE(51);
      if (lookahead == 'n') ADVANCE(94);
      if (('0' <= lookahead && lookahead <= '9') ||
          ('A' <= lookahead && lookahead <= 'F') ||
          ('a' <= lookahead && lookahead <= 'f')) ADVANCE(99);
      END_STATE();
    case 100:
      ACCEPT_TOKEN(sym_number);
      if (lookahead == '_') ADVANCE(48);
      if (lookahead == 'n') ADVANCE(94);
      if (('0' <= lookahead && lookahead <= '9')) ADVANCE(100);
      END_STATE();
    case 101:
      ACCEPT_TOKEN(sym_number);
      if (lookahead == '_') ADVANCE(49);
      if (('0' <= lookahead && lookahead <= '9')) ADVANCE(101);
      END_STATE();
    case 102:
      ACCEPT_TOKEN(sym_number);
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(43);
      if (lookahead == '_') ADVANCE(47);
      if (('0' <= lookahead && lookahead <= '9')) ADVANCE(102);
      END_STATE();
    case 103:
      ACCEPT_TOKEN(sym_number);
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(43);
      if (('0' <= lookahead && lookahead <= '9')) ADVANCE(102);
      END_STATE();
    case 104:
      ACCEPT_TOKEN(sym_state_set_variable);
      if (('0' <= lookahead && lookahead <= '9') ||
          ('A' <= lookahead && lookahead <= 'Z') ||
          lookahead == '_' ||
          ('a' <= lookahead && lookahead <= 'z')) ADVANCE(104);
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
  [15] = {.lex_state = 2},
  [16] = {.lex_state = 2},
  [17] = {.lex_state = 2},
  [18] = {.lex_state = 0},
  [19] = {.lex_state = 0},
  [20] = {.lex_state = 0},
  [21] = {.lex_state = 0},
  [22] = {.lex_state = 0},
  [23] = {.lex_state = 0},
  [24] = {.lex_state = 0},
  [25] = {.lex_state = 0},
  [26] = {.lex_state = 0},
  [27] = {.lex_state = 0},
  [28] = {.lex_state = 0},
  [29] = {.lex_state = 0},
  [30] = {.lex_state = 0},
  [31] = {.lex_state = 2},
  [32] = {.lex_state = 0},
  [33] = {.lex_state = 0},
  [34] = {.lex_state = 0},
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
    [anon_sym_always] = ACTIONS(1),
    [anon_sym_until] = ACTIONS(1),
    [anon_sym_sometimes] = ACTIONS(1),
    [anon_sym_can] = ACTIONS(1),
    [anon_sym_must] = ACTIONS(1),
    [anon_sym_PLUS] = ACTIONS(1),
    [anon_sym_DASH] = ACTIONS(1),
    [anon_sym_QMARK] = ACTIONS(1),
    [anon_sym_DQUOTE] = ACTIONS(1),
    [anon_sym_SQUOTE] = ACTIONS(1),
    [sym_escape_sequence] = ACTIONS(1),
    [sym_number] = ACTIONS(1),
    [sym_state_set_variable] = ACTIONS(1),
  },
  [1] = {
    [sym_source_file] = STATE(34),
    [sym_formula] = STATE(28),
    [sym_boolean] = STATE(18),
    [sym_or] = STATE(18),
    [sym_and] = STATE(18),
    [sym_empty_box] = STATE(18),
    [sym_empty_dia] = STATE(18),
    [sym_box] = STATE(18),
    [sym_dia] = STATE(18),
    [sym_prop] = STATE(18),
    [sym_sign] = STATE(17),
    [sym_prop_label] = STATE(23),
    [sym_pred] = STATE(29),
    [anon_sym_true] = ACTIONS(3),
    [anon_sym_false] = ACTIONS(3),
    [anon_sym_LBRACK] = ACTIONS(5),
    [anon_sym_LT] = ACTIONS(7),
    [anon_sym_RPAREN] = ACTIONS(9),
    [anon_sym_PLUS] = ACTIONS(11),
    [anon_sym_DASH] = ACTIONS(11),
    [anon_sym_QMARK] = ACTIONS(11),
    [aux_sym_prop_label_token1] = ACTIONS(13),
    [sym_state_set_variable] = ACTIONS(15),
  },
};

static const uint16_t ts_small_parse_table[] = {
  [0] = 12,
    ACTIONS(5), 1,
      anon_sym_LBRACK,
    ACTIONS(7), 1,
      anon_sym_LT,
    ACTIONS(9), 1,
      anon_sym_RPAREN,
    ACTIONS(13), 1,
      aux_sym_prop_label_token1,
    ACTIONS(15), 1,
      sym_state_set_variable,
    STATE(17), 1,
      sym_sign,
    STATE(23), 1,
      sym_prop_label,
    STATE(24), 1,
      sym_formula,
    STATE(29), 1,
      sym_pred,
    ACTIONS(3), 2,
      anon_sym_true,
      anon_sym_false,
    ACTIONS(11), 3,
      anon_sym_PLUS,
      anon_sym_DASH,
      anon_sym_QMARK,
    STATE(18), 8,
      sym_boolean,
      sym_or,
      sym_and,
      sym_empty_box,
      sym_empty_dia,
      sym_box,
      sym_dia,
      sym_prop,
  [47] = 12,
    ACTIONS(5), 1,
      anon_sym_LBRACK,
    ACTIONS(7), 1,
      anon_sym_LT,
    ACTIONS(9), 1,
      anon_sym_RPAREN,
    ACTIONS(13), 1,
      aux_sym_prop_label_token1,
    ACTIONS(15), 1,
      sym_state_set_variable,
    STATE(17), 1,
      sym_sign,
    STATE(23), 1,
      sym_prop_label,
    STATE(27), 1,
      sym_formula,
    STATE(29), 1,
      sym_pred,
    ACTIONS(3), 2,
      anon_sym_true,
      anon_sym_false,
    ACTIONS(11), 3,
      anon_sym_PLUS,
      anon_sym_DASH,
      anon_sym_QMARK,
    STATE(18), 8,
      sym_boolean,
      sym_or,
      sym_and,
      sym_empty_box,
      sym_empty_dia,
      sym_box,
      sym_dia,
      sym_prop,
  [94] = 12,
    ACTIONS(5), 1,
      anon_sym_LBRACK,
    ACTIONS(7), 1,
      anon_sym_LT,
    ACTIONS(9), 1,
      anon_sym_RPAREN,
    ACTIONS(13), 1,
      aux_sym_prop_label_token1,
    ACTIONS(15), 1,
      sym_state_set_variable,
    STATE(17), 1,
      sym_sign,
    STATE(21), 1,
      sym_formula,
    STATE(23), 1,
      sym_prop_label,
    STATE(29), 1,
      sym_pred,
    ACTIONS(3), 2,
      anon_sym_true,
      anon_sym_false,
    ACTIONS(11), 3,
      anon_sym_PLUS,
      anon_sym_DASH,
      anon_sym_QMARK,
    STATE(18), 8,
      sym_boolean,
      sym_or,
      sym_and,
      sym_empty_box,
      sym_empty_dia,
      sym_box,
      sym_dia,
      sym_prop,
  [141] = 12,
    ACTIONS(5), 1,
      anon_sym_LBRACK,
    ACTIONS(7), 1,
      anon_sym_LT,
    ACTIONS(9), 1,
      anon_sym_RPAREN,
    ACTIONS(13), 1,
      aux_sym_prop_label_token1,
    ACTIONS(15), 1,
      sym_state_set_variable,
    STATE(17), 1,
      sym_sign,
    STATE(23), 1,
      sym_prop_label,
    STATE(26), 1,
      sym_formula,
    STATE(29), 1,
      sym_pred,
    ACTIONS(3), 2,
      anon_sym_true,
      anon_sym_false,
    ACTIONS(11), 3,
      anon_sym_PLUS,
      anon_sym_DASH,
      anon_sym_QMARK,
    STATE(18), 8,
      sym_boolean,
      sym_or,
      sym_and,
      sym_empty_box,
      sym_empty_dia,
      sym_box,
      sym_dia,
      sym_prop,
  [188] = 12,
    ACTIONS(5), 1,
      anon_sym_LBRACK,
    ACTIONS(7), 1,
      anon_sym_LT,
    ACTIONS(9), 1,
      anon_sym_RPAREN,
    ACTIONS(13), 1,
      aux_sym_prop_label_token1,
    ACTIONS(15), 1,
      sym_state_set_variable,
    STATE(17), 1,
      sym_sign,
    STATE(22), 1,
      sym_formula,
    STATE(23), 1,
      sym_prop_label,
    STATE(29), 1,
      sym_pred,
    ACTIONS(3), 2,
      anon_sym_true,
      anon_sym_false,
    ACTIONS(11), 3,
      anon_sym_PLUS,
      anon_sym_DASH,
      anon_sym_QMARK,
    STATE(18), 8,
      sym_boolean,
      sym_or,
      sym_and,
      sym_empty_box,
      sym_empty_dia,
      sym_box,
      sym_dia,
      sym_prop,
  [235] = 12,
    ACTIONS(5), 1,
      anon_sym_LBRACK,
    ACTIONS(7), 1,
      anon_sym_LT,
    ACTIONS(9), 1,
      anon_sym_RPAREN,
    ACTIONS(13), 1,
      aux_sym_prop_label_token1,
    ACTIONS(15), 1,
      sym_state_set_variable,
    STATE(17), 1,
      sym_sign,
    STATE(23), 1,
      sym_prop_label,
    STATE(25), 1,
      sym_formula,
    STATE(29), 1,
      sym_pred,
    ACTIONS(3), 2,
      anon_sym_true,
      anon_sym_false,
    ACTIONS(11), 3,
      anon_sym_PLUS,
      anon_sym_DASH,
      anon_sym_QMARK,
    STATE(18), 8,
      sym_boolean,
      sym_or,
      sym_and,
      sym_empty_box,
      sym_empty_dia,
      sym_box,
      sym_dia,
      sym_prop,
  [282] = 9,
    ACTIONS(17), 1,
      anon_sym_RBRACK,
    ACTIONS(19), 1,
      anon_sym_RPAREN,
    ACTIONS(21), 1,
      aux_sym_prop_label_token1,
    STATE(13), 1,
      sym_prop_label,
    STATE(14), 1,
      sym_pred,
    STATE(16), 1,
      sym_sign,
    STATE(33), 1,
      sym_action,
    STATE(11), 2,
      sym_prop,
      aux_sym_action_repeat1,
    ACTIONS(11), 3,
      anon_sym_PLUS,
      anon_sym_DASH,
      anon_sym_QMARK,
  [313] = 9,
    ACTIONS(19), 1,
      anon_sym_RPAREN,
    ACTIONS(21), 1,
      aux_sym_prop_label_token1,
    ACTIONS(23), 1,
      anon_sym_GT,
    STATE(13), 1,
      sym_prop_label,
    STATE(14), 1,
      sym_pred,
    STATE(16), 1,
      sym_sign,
    STATE(32), 1,
      sym_action,
    STATE(11), 2,
      sym_prop,
      aux_sym_action_repeat1,
    ACTIONS(11), 3,
      anon_sym_PLUS,
      anon_sym_DASH,
      anon_sym_QMARK,
  [344] = 8,
    ACTIONS(27), 1,
      anon_sym_RPAREN,
    ACTIONS(33), 1,
      aux_sym_prop_label_token1,
    STATE(13), 1,
      sym_prop_label,
    STATE(14), 1,
      sym_pred,
    STATE(16), 1,
      sym_sign,
    ACTIONS(25), 2,
      anon_sym_RBRACK,
      anon_sym_GT,
    STATE(10), 2,
      sym_prop,
      aux_sym_action_repeat1,
    ACTIONS(30), 3,
      anon_sym_PLUS,
      anon_sym_DASH,
      anon_sym_QMARK,
  [373] = 8,
    ACTIONS(19), 1,
      anon_sym_RPAREN,
    ACTIONS(21), 1,
      aux_sym_prop_label_token1,
    STATE(13), 1,
      sym_prop_label,
    STATE(14), 1,
      sym_pred,
    STATE(16), 1,
      sym_sign,
    ACTIONS(36), 2,
      anon_sym_RBRACK,
      anon_sym_GT,
    STATE(10), 2,
      sym_prop,
      aux_sym_action_repeat1,
    ACTIONS(11), 3,
      anon_sym_PLUS,
      anon_sym_DASH,
      anon_sym_QMARK,
  [402] = 1,
    ACTIONS(38), 7,
      anon_sym_RBRACK,
      anon_sym_GT,
      anon_sym_RPAREN,
      anon_sym_PLUS,
      anon_sym_DASH,
      anon_sym_QMARK,
      aux_sym_prop_label_token1,
  [412] = 1,
    ACTIONS(40), 7,
      anon_sym_RBRACK,
      anon_sym_GT,
      anon_sym_RPAREN,
      anon_sym_PLUS,
      anon_sym_DASH,
      anon_sym_QMARK,
      aux_sym_prop_label_token1,
  [422] = 1,
    ACTIONS(42), 7,
      anon_sym_RBRACK,
      anon_sym_GT,
      anon_sym_RPAREN,
      anon_sym_PLUS,
      anon_sym_DASH,
      anon_sym_QMARK,
      aux_sym_prop_label_token1,
  [432] = 1,
    ACTIONS(44), 7,
      anon_sym_RBRACK,
      anon_sym_GT,
      anon_sym_RPAREN,
      anon_sym_PLUS,
      anon_sym_DASH,
      anon_sym_QMARK,
      aux_sym_prop_label_token1,
  [442] = 4,
    ACTIONS(19), 1,
      anon_sym_RPAREN,
    ACTIONS(21), 1,
      aux_sym_prop_label_token1,
    STATE(12), 1,
      sym_prop_label,
    STATE(14), 1,
      sym_pred,
  [455] = 4,
    ACTIONS(9), 1,
      anon_sym_RPAREN,
    ACTIONS(46), 1,
      aux_sym_prop_label_token1,
    STATE(20), 1,
      sym_prop_label,
    STATE(29), 1,
      sym_pred,
  [468] = 1,
    ACTIONS(48), 3,
      ts_builtin_sym_end,
      anon_sym_or,
      anon_sym_and,
  [474] = 1,
    ACTIONS(50), 3,
      ts_builtin_sym_end,
      anon_sym_or,
      anon_sym_and,
  [480] = 1,
    ACTIONS(38), 3,
      ts_builtin_sym_end,
      anon_sym_or,
      anon_sym_and,
  [486] = 1,
    ACTIONS(52), 3,
      ts_builtin_sym_end,
      anon_sym_or,
      anon_sym_and,
  [492] = 1,
    ACTIONS(54), 3,
      ts_builtin_sym_end,
      anon_sym_or,
      anon_sym_and,
  [498] = 1,
    ACTIONS(40), 3,
      ts_builtin_sym_end,
      anon_sym_or,
      anon_sym_and,
  [504] = 1,
    ACTIONS(56), 3,
      ts_builtin_sym_end,
      anon_sym_or,
      anon_sym_and,
  [510] = 1,
    ACTIONS(58), 3,
      ts_builtin_sym_end,
      anon_sym_or,
      anon_sym_and,
  [516] = 1,
    ACTIONS(60), 3,
      ts_builtin_sym_end,
      anon_sym_or,
      anon_sym_and,
  [522] = 1,
    ACTIONS(62), 3,
      ts_builtin_sym_end,
      anon_sym_or,
      anon_sym_and,
  [528] = 3,
    ACTIONS(64), 1,
      ts_builtin_sym_end,
    ACTIONS(66), 1,
      anon_sym_or,
    ACTIONS(68), 1,
      anon_sym_and,
  [538] = 1,
    ACTIONS(42), 3,
      ts_builtin_sym_end,
      anon_sym_or,
      anon_sym_and,
  [544] = 1,
    ACTIONS(44), 3,
      ts_builtin_sym_end,
      anon_sym_or,
      anon_sym_and,
  [550] = 1,
    ACTIONS(70), 2,
      anon_sym_RPAREN,
      aux_sym_prop_label_token1,
  [555] = 1,
    ACTIONS(72), 1,
      anon_sym_GT,
  [559] = 1,
    ACTIONS(74), 1,
      anon_sym_RBRACK,
  [563] = 1,
    ACTIONS(76), 1,
      ts_builtin_sym_end,
};

static const uint32_t ts_small_parse_table_map[] = {
  [SMALL_STATE(2)] = 0,
  [SMALL_STATE(3)] = 47,
  [SMALL_STATE(4)] = 94,
  [SMALL_STATE(5)] = 141,
  [SMALL_STATE(6)] = 188,
  [SMALL_STATE(7)] = 235,
  [SMALL_STATE(8)] = 282,
  [SMALL_STATE(9)] = 313,
  [SMALL_STATE(10)] = 344,
  [SMALL_STATE(11)] = 373,
  [SMALL_STATE(12)] = 402,
  [SMALL_STATE(13)] = 412,
  [SMALL_STATE(14)] = 422,
  [SMALL_STATE(15)] = 432,
  [SMALL_STATE(16)] = 442,
  [SMALL_STATE(17)] = 455,
  [SMALL_STATE(18)] = 468,
  [SMALL_STATE(19)] = 474,
  [SMALL_STATE(20)] = 480,
  [SMALL_STATE(21)] = 486,
  [SMALL_STATE(22)] = 492,
  [SMALL_STATE(23)] = 498,
  [SMALL_STATE(24)] = 504,
  [SMALL_STATE(25)] = 510,
  [SMALL_STATE(26)] = 516,
  [SMALL_STATE(27)] = 522,
  [SMALL_STATE(28)] = 528,
  [SMALL_STATE(29)] = 538,
  [SMALL_STATE(30)] = 544,
  [SMALL_STATE(31)] = 550,
  [SMALL_STATE(32)] = 555,
  [SMALL_STATE(33)] = 559,
  [SMALL_STATE(34)] = 563,
};

static const TSParseActionEntry ts_parse_actions[] = {
  [0] = {.entry = {.count = 0, .reusable = false}},
  [1] = {.entry = {.count = 1, .reusable = false}}, RECOVER(),
  [3] = {.entry = {.count = 1, .reusable = false}}, SHIFT(19),
  [5] = {.entry = {.count = 1, .reusable = true}}, SHIFT(8),
  [7] = {.entry = {.count = 1, .reusable = true}}, SHIFT(9),
  [9] = {.entry = {.count = 1, .reusable = true}}, SHIFT(30),
  [11] = {.entry = {.count = 1, .reusable = true}}, SHIFT(31),
  [13] = {.entry = {.count = 1, .reusable = false}}, SHIFT(29),
  [15] = {.entry = {.count = 1, .reusable = true}}, SHIFT(18),
  [17] = {.entry = {.count = 1, .reusable = true}}, SHIFT(4),
  [19] = {.entry = {.count = 1, .reusable = true}}, SHIFT(15),
  [21] = {.entry = {.count = 1, .reusable = true}}, SHIFT(14),
  [23] = {.entry = {.count = 1, .reusable = true}}, SHIFT(6),
  [25] = {.entry = {.count = 1, .reusable = true}}, REDUCE(aux_sym_action_repeat1, 2),
  [27] = {.entry = {.count = 2, .reusable = true}}, REDUCE(aux_sym_action_repeat1, 2), SHIFT_REPEAT(15),
  [30] = {.entry = {.count = 2, .reusable = true}}, REDUCE(aux_sym_action_repeat1, 2), SHIFT_REPEAT(31),
  [33] = {.entry = {.count = 2, .reusable = true}}, REDUCE(aux_sym_action_repeat1, 2), SHIFT_REPEAT(14),
  [36] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_action, 1),
  [38] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_prop, 2),
  [40] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_prop, 1),
  [42] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_prop_label, 1),
  [44] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_pred, 1),
  [46] = {.entry = {.count = 1, .reusable = true}}, SHIFT(29),
  [48] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_formula, 1),
  [50] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_boolean, 1),
  [52] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_empty_box, 3),
  [54] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_empty_dia, 3),
  [56] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_or, 3),
  [58] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_and, 3),
  [60] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_box, 4),
  [62] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_dia, 4),
  [64] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_source_file, 1),
  [66] = {.entry = {.count = 1, .reusable = true}}, SHIFT(2),
  [68] = {.entry = {.count = 1, .reusable = true}}, SHIFT(7),
  [70] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_sign, 1),
  [72] = {.entry = {.count = 1, .reusable = true}}, SHIFT(3),
  [74] = {.entry = {.count = 1, .reusable = true}}, SHIFT(5),
  [76] = {.entry = {.count = 1, .reusable = true}},  ACCEPT_INPUT(),
};

#ifdef __cplusplus
extern "C" {
#endif
#ifdef _WIN32
#define extern __declspec(dllexport)
#endif

extern const TSLanguage *tree_sitter_Modality(void) {
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
