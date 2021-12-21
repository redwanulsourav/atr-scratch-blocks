'use strict';

goog.provide('Blockly.Blocks.atr');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');


Blockly.Blocks['moveforward'] = {
    /**
     * Block to move steps.
     * @this Blockly.Block
     */
    init: function() {
      this.jsonInit({
        "message0": "move steps forward",
        "category": Blockly.Categories.atr,
        "extensions": ["colours_motion", "shape_statement"]
      });
    }
  };
Blockly.Blocks['set_pin_mode'] = {
  init: function() {
    this.jsonInit({
      "message0": "Set Pin %1 as %2",
      "category": Blockly.Categories.atr,
      "args0":[
        {
          "type": "input_value",
          "name": "SET_PIN_NUMBER"
        },
        {
          "type": "field_dropdown",
          "name": "PIN_MODE",
          "options": [
            [Blockly.Msg.ATR_PINMODE_OUTPUT, 'OUTPUT'],
            [Blockly.Msg.ATR_PINMODE_INPUT, 'INPUT'],
          ]
        }],
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};

Blockly.Blocks['write_digital_pin'] = {
  init: function() {
    this.jsonInit({
      "message0": "Write digital %1 to pin %2",
      "category": Blockly.Categories.atr,
      "args0":[
        {
          "type": "field_dropdown",
          "name": "WRITE_DIGITAL_TO_PIN",
          "options": [
            [Blockly.Msg.ATR_DIGITAL_HIGH, 'DHIGH'],
            [Blockly.Msg.ATR_DIGITAL_LOW, 'DLOW'],
          ]
        },
        {
          "type": "input_value",
          "name": "PIN_NUMBER"
        }],
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};

Blockly.Blocks['delay'] = {
  init: function() {
    this.jsonInit({
      "message0": "Wait for %1 milliseconds",
      "category": Blockly.Categories.atr,
      "args0":[
        {
          "type": "input_value",
          "name": "DELAY_TIME"
        }],
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};

Blockly.Blocks['print_serial_monitor'] = {
  init: function() {
    this.jsonInit({
      "message0": "Print %1 to serial monitor",
      "category": Blockly.Categories.atr,
      "args0":[
        {
          "type": "input_value",
          "name": "SERIAL_MESSAGE"
        }],
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};

Blockly.Blocks['read_orientation_wearable'] = {
  init: function() {
    this.jsonInit({
      "message0": "Read orientation from wearable",
      "category": Blockly.Categories.atr,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};

Blockly.Blocks['read_heart_beat_wearable'] = {
  init: function() {
    this.jsonInit({
      "message0": "Read heartbeat data from wearable",
      "category": Blockly.Categories.atr,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};

Blockly.Blocks['activate_haptic_motor_wearable'] = {
  init: function() {
    this.jsonInit({
      "message0": "Move gear motor %1 %2",
      "category": Blockly.Categories.atr,
      "extensions": ["colours_motion", "shape_statement"],
      "args0":[
        {
          "type": "field_dropdown",
          "name": "GEAR_MOTOR_ID",
          "options": [
            [Blockly.Msg.GEAR_MOTOR_1, '1'],
            [Blockly.Msg.GEAR_MOTOR_2, '2'],
          ]
        },
        {
          "type": "field_dropdown",
          "name": "GEAR_MOTOR_DIRECTION",
          "options": [
            [Blockly.Msg.ATR_FORWARD, 'forward'],
            [Blockly.Msg.ATR_BACKWARD, 'backward'],
          ]
        }],
    });
  }
};

Blockly.Blocks['move_gear_motor'] = {
  init: function() {
    this.jsonInit({
      "message0": "Motor: %1 Direction: %2, Wait: %3",
      "category": Blockly.Categories.atr,
      "args0":[
        {
          "type": "field_dropdown",
          "name": "GEAR_MOTOR_ID",
          "options": [
            [Blockly.Msg.GEAR_MOTOR_1, '1'],
            [Blockly.Msg.GEAR_MOTOR_2, '2'],
          ]
        },
        {
          "type": "field_dropdown",
          "name": "GEAR_MOTOR_DIRECTION",
          "options": [
            [Blockly.Msg.ATR_FORWARD, 'forward'],
            [Blockly.Msg.ATR_BACKWARD, 'backward'],
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
