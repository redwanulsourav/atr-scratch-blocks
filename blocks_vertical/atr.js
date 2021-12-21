'use strict';

goog.provide('Blockly.Blocks.atr');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');


Blockly.Blocks['move_gear_motor'] = {
  init: function() {
    this.jsonInit({
      "message0": "Motor: %1 Direction: %2 Wait: %3",
      "category": Blockly.Categories.atr,
      "args0":[
        {
          "type": "field_dropdown",
          "name": "GEAR_MOTOR_ID",
          "options": [
            [Blockly.Msg.ATR_GEAR_MOTOR_1, '1'],
            [Blockly.Msg.ATR_GEAR_MOTOR_2, '2'],
          ]
        },
        {
          "type": "field_dropdown",
          "name": "GEAR_MOTOR_DIRECTION",
          "options": [
            [Blockly.Msg.ATR_GEAR_MOTOR_FORWARD, 'forward'],
            [Blockly.Msg.ATR_GEAR_MOTOR_BACKWARD, 'backward'],
          ]
        },
        {
          "type": "input_value",
          "name": "WAIT_TIME"
        }],
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};
