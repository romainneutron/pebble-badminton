#ifndef WINDOWS_SUMMARY_H
#define WINDOWS_SUMMARY_H

#include <pebble.h>
#include "menu.h"
#include "../state.h"

typedef enum {
  AppKeyResult = 0,   // Key: 0
  AppKeyScore,        // Key: 1
  AppKeyScoreDetails, // Key: 2
  AppKeyDuration,     // Key: 3
} AppKeys;

void summary_window_push(State *state);

#endif
