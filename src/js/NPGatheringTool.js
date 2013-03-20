/*!
GPII N/P Gathering tool.

Copyright 2013 OCAD University

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/gpii/universal/LICENSE.txt
*/

(function ($, fluid) {

    "use strict";

    fluid.registerNamespace("gpii.NPGatheringTool");

    gpii.NPGatheringTool.configParser = {
        parse: fluid.pathUtil.parseEL,
        compose: fluid.pathUtil.composePath
    };

    gpii.NPGatheringTool.resolverGetConfig = {
        parser: gpii.NPGatheringTool.configParser,
        strategies: [fluid.model.defaultFetchStrategy]
    };

    gpii.NPGatheringTool.resolverSetConfig = {
        parser: gpii.NPGatheringTool.configParser,
        strategies: [fluid.model.defaultFetchStrategy, fluid.model.defaultCreatorStrategy]
    };

    fluid.defaults("gpii.NPGatheringTool", {
        gradeNames: ["autoInit", "fluid.rendererComponent"],
        mergePolicy: {
            // TODO: This should go away once we update to the latest infusion that has a fix
            // for FLUID-4935.
            "changeApplierOptions.resolverSetConfig": "resolverSetConfig"
        },
        strings: {
            save: "Save",
            label: "N/P Gathering Tool",
            tokenLabel: "Token",
            linuxGroupLabel: "Linux",
            windowsGroupLabel: "Windows",
            orcaGroupLabel: "Orca",
            desktopGroupLabel: "Desktop",
            a11yGroupLabel: "Accessibility",
            nvdaGroupLabel: "NVDA",
            "orca.voice.default.familyLabel": "Voice Default Family",
            "orca.voice.default.rateLabel": "Voice Default Rate",
            "orca.enableTutorialMessagesLabel": "Enable Tutorial Messages",
            "orca.enableEchoByCharacterLabel": "Enable Echo by Character",
            "orca.enableEchoByWordLabel": "Enable Echo by Word",
            "orca.enableBrailleLabel": "Enable Braille",
            "orca.verbalizePunctuationStyleLabel": "Verbalize Punctuation Style",
            "orca.sayAllStyleLabel": "Say All Style",
            "orca.enableSpeechLabel": "Enable Speech",
            "desktop.gtk-themeLabel": "GTK Theme",
            "desktop.icon-themeLabel": "Icon Theme",
            "desktop.text-scaling-factorLabel": "Text Scaling Factor",
            "desktop.cursor-sizeLabel": "Cursor Size",
            "desktop.screen-magnifier-enabledLabel": "Enable Screen Magnifier",
            "desktop.mag-factorLabel": "Magnification Factor",
            "desktop.screen-positionLabel": "Screen Position",
            "desktop.show-cross-hairsLabel": "Show Cross Hairs",
            "nvda.speech.espeak.rateLabel": "Rate",
            "nvda.speech.espeak.rateBoostLabel": "Rate Boost"
            
        },
        selectors: {
            save: ".gpii-NPGatheringTool-save",

            tokenLabel: ".gpii-NPGatheringTool-token-label",
            token: ".gpii-NPGatheringTool-token",

            label: ".gpii-NPGatheringTool-label",
            linuxGroupLabel: ".gpii-NPGatheringTool-linuxGroupLabel",
            orcaGroupLabel: ".gpii-NPGatheringTool-orcaGroupLabel",
            desktopGroupLabel: ".gpii-NPGatheringTool-desktopGroupLabel",
            a11yGroupLabel: ".gpii-NPGatheringTool-a11yGroupLabel",
            windowsGroupLabel: ".gpii-NPGatheringTool-windowsGroupLabel",
            nvdaGroupLabel: ".gpii-NPGatheringTool-nvdaGroupLabel",

            "orca.voice.default.family": ".gpii-NPGatheringTool-orca-voice-default-family",
            "orca.voice.default.familyLabel": ".gpii-NPGatheringTool-orca-voice-default-familyLabel",
            "orca.voice.default.rate": ".gpii-NPGatheringTool-orca-voice-default-rate",
            "orca.voice.default.rateLabel": ".gpii-NPGatheringTool-orca-voice-default-rateLabel",
            "orca.enableTutorialMessages": ".gpii-NPGatheringTool-orca-enableTutorialMessages",
            "orca.enableTutorialMessagesLabel": ".gpii-NPGatheringTool-orca-enableTutorialMessagesLabel",
            "orca.enableEchoByCharacter": ".gpii-NPGatheringTool-orca-enableEchoByCharacter",
            "orca.enableEchoByCharacterLabel": ".gpii-NPGatheringTool-orca-enableEchoByCharacterLabel",
            "orca.enableEchoByWord": ".gpii-NPGatheringTool-orca-enableEchoByWord",
            "orca.enableEchoByWordLabel": ".gpii-NPGatheringTool-orca-enableEchoByWordLabel",
            "orca.enableBraille": ".gpii-NPGatheringTool-orca-enableBraille",
            "orca.enableBrailleLabel": ".gpii-NPGatheringTool-orca-enableBrailleLabel",
            "orca.verbalizePunctuationStyle": ".gpii-NPGatheringTool-orca-verbalizePunctuationStyle",
            "orca.verbalizePunctuationStyleLabel": ".gpii-NPGatheringTool-orca-verbalizePunctuationStyleLabel",
            "orca.sayAllStyle": ".gpii-NPGatheringTool-orca-sayAllStyle",
            "orca.sayAllStyleLabel": ".gpii-NPGatheringTool-orca-sayAllStyleLabel",
            "orca.enableSpeech": ".gpii-NPGatheringTool-orca-enableSpeech",
            "orca.enableSpeechLabel": ".gpii-NPGatheringTool-orca-enableSpeechLabel",
            "desktop.gtk-theme": ".gpii-NPGatheringTool-desktop-gtk-theme",
            "desktop.gtk-themeLabel": ".gpii-NPGatheringTool-desktop-gtk-themeLabel",
            "desktop.icon-theme": ".gpii-NPGatheringTool-desktop-icon-theme",
            "desktop.icon-themeLabel": ".gpii-NPGatheringTool-desktop-icon-themeLabel",
            "desktop.text-scaling-factor": ".gpii-NPGatheringTool-desktop-text-scaling-factor",
            "desktop.text-scaling-factorLabel": ".gpii-NPGatheringTool-desktop-text-scaling-factorLabel",
            "desktop.cursor-size": ".gpii-NPGatheringTool-desktop-cursor-size",
            "desktop.cursor-sizeLabel": ".gpii-NPGatheringTool-desktop-cursor-sizeLabel",
            "desktop.screen-magnifier-enabled": ".gpii-NPGatheringTool-desktop-screen-magnifier-enabled",
            "desktop.screen-magnifier-enabledLabel": ".gpii-NPGatheringTool-desktop-screen-magnifier-enabledLabel",
            "desktop.mag-factor": ".gpii-NPGatheringTool-desktop-mag-factor",
            "desktop.mag-factorLabel": ".gpii-NPGatheringTool-desktop-mag-factorLabel",
            "desktop.screen-position": ".gpii-NPGatheringTool-desktop-screen-position",
            "desktop.screen-positionLabel": ".gpii-NPGatheringTool-desktop-screen-positionLabel",
            "desktop.show-cross-hairs": ".gpii-NPGatheringTool-desktop-show-cross-hairs",
            "desktop.show-cross-hairsLabel": ".gpii-NPGatheringTool-desktop-show-cross-hairsLabel",

            "nvda.speech.espeak.rate": ".gpii-NPGatheringTool-nvda-speech-espeak-rate",
            "nvda.speech.espeak.rateLabel": ".gpii-NPGatheringTool-nvda-speech-espeak-rateLabel",
            "nvda.speech.espeak.rateBoost": ".gpii-NPGatheringTool-nvda-speech-espeak-rateBoost",
            "nvda.speech.espeak.rateBoostLabel": ".gpii-NPGatheringTool-nvda-speech-espeak-rateBoostLabel"
            
        },
        model: {
            token: "",
            voicesDefaultFamilyNames: ["english", "english-us", "english-scottish", "english-westindies",
                "afrikaans", "bulgarian-test", "bosnian", "catalan", "czech", "welsh-test", "danish",
                "german", "greek", "greek-ancient", "esperanto", "spanish", "spanish-latin-american",
                "estonian", "finnish", "french", "belgian", "hindi", "croatian", "hungarian", "armenian",
                "armenian-west", "indonesian-test", "icelandic-test", "italian", "lojban", "georgian-test",
                "kannada", "kurdish", "latin", "latvian", "macedonian-test", "malayalam", "dutch-test",
                "norwegian", "papiamento-test", "polish", "brazil", "portugal", "romanian", "russian_test",
                "slovak", "albanian", "serbian", "swedish", "swahili-test", "tamil", "turkish", "vietnam",
                "mandarin", "cantonese"],
            voicesDefaultFamilyValues: ["en", "en", "en", "en", "af", "bg", "bs", "ca", "cs", "cy", "da",
                "de", "el", "grc", "eo", "es", "es", "et", "fi", "fr", "fr", "hi", "hr", "hu", "hy", "hy",
                "id", "is", "it", "jbo", "ka", "kn", "ku", "la", "lv", "mk", "ml", "nl", "no", "pap", "pl",
                "pt", "pt", "ro", "ru", "sk", "sq", "sr", "sv", "sw", "ta", "tr", "vi", "zh", "zh"],
            "gtk-themeValues": ["HighContrast", "Adwaita"],
            "icon-themeValues": ["HighContrast", "gnome"],
            "screen-positionValues": ["full-screen", "left-half", "right-half", "top-half", "bottom-half"],
            prefs: {
                // LINUX
                "http://registry.gpii.org/applications/org.gnome.orca.voice.default": [{
                    value: {
                        family: "en",
                        rate: 0
                    }
                }],
                "http://registry.gpii.org/applications/org.gnome.orca": [{
                    value: {
                        enableTutorialMessages: false,
                        enableEchoByCharacter: false,
                        enableEchoByWord: false,
                        enableBraille: false,
                        verbalizePunctuationStyle: 0,
                        sayAllStyle: 0,
                        enableSpeech: false
                    }
                }],
                "http://registry.gpii.org/applications/org.gnome.desktop.interface": [{
                    value: {
                        "gtk-theme": "HighContrast",
                        "icon-theme": "HighContrast",
                        "text-scaling-factor": 0.5,
                        "cursor-size": 1
                    }
                }],
                "http://registry.gpii.org/applications/org.gnome.desktop.a11y.applications": [{
                    value: {
                        "screen-magnifier-enabled": false // TODO
                    }
                }],
                "http://registry.gpii.org/applications/org.gnome.desktop.a11y.magnifier": [{
                    value: {
                        "mag-factor": 1,
                        "screen-position": "full-screen",
                        "show-cross-hairs": false
                    }
                }],
                // WINDOWS
                "http://registry.gpii.org/applications/org.nvda-project": [{
                    value: {
                        "speech\\.espeak\\.voice": "en\\en",
                        "speech.espeak.rate": 1,
                        "speech.espeak.rateBoost": false,
                        "reviewCursor\\.followFocus": false,
                        "reviewCursor\\.followCaret": false,
                        "reviewCursor\\.followMouse": false,
                        "presentation\\.reportHelpBalloons": false,
                        "keyboard\\.speakTypedCharacters": false,
                        "keyboard\\.speakTypedWords": false,
                        "speech\\.espeak\\.sayCapForCapitals": false,
                        "speech\\.symbolLevel": 0,
                        "virtualBuffers\\.autoSayAllOnPageLoad": false,
                        "speech\\.synth": null,
                        "speech\\.outputDevice": null
                    }
                }],
                "http://registry.gpii.org/applications/com.microsoft.windows.cursors": [{
                    value: {
                        // TODO
                    }
                }],
                "http://registry.gpii.org/applications/com.microsoft.windows.magnifier": [{
                    value: {
                        "Magnification": 100,
                        "FollowFocus": 0,
                        "FollowCaret": 0,
                        "FollowMouse": 0,
                        "MagnificationPosition": 1
                    }
                }]
            }
        },
        protoTree: {
            save: {
                messagekey: "save"
            },
            tokenLabel: {
                messagekey: "tokenLabel"
            },
            token: "${token}",
            label: {
                messagekey: "label"
            },
            linuxGroupLabel: {
                messagekey: "linuxGroupLabel"
            },
            windowsGroupLabel: {
                messagekey: "windowsGroupLabel"
            },
            orcaGroupLabel: {
                messagekey: "orcaGroupLabel"
            },
            desktopGroupLabel: {
                messagekey: "desktopGroupLabel"
            },
            a11yGroupLabel: {
                messagekey: "a11yGroupLabel"
            },
            nvdaGroupLabel: {
                messagekey: "nvdaGroupLabel"
            },
            "orca.voice.default.family": {
                optionnames: "${voicesDefaultFamilyNames}",
                optionlist: "${voicesDefaultFamilyValues}",
                selection: "${prefs.http://registry\\.gpii\\.org/applications/org\\.gnome\\.orca\\.voice\\.default.0.value.family}"
            },
            "orca.voice.default.familyLabel": {messagekey: "orca.voice.default.familyLabel"},
            "orca.voice.default.rate": {
                decorators: {
                    type: "fluid",
                    func: "gpii.textfieldSlider",
                    options: {
                        elPath: "prefs.http://registry\\.gpii\\.org/applications/org\\.gnome\\.orca\\.voice\\.default.0.value.rate",
                        model: {
                            min: 0,
                            max: 100
                        }
                    }
                }
            },
            "orca.voice.default.rateLabel": {messagekey: "orca.voice.default.rateLabel"},
            "orca.enableTutorialMessages": "${prefs.http://registry\\.gpii\\.org/applications/org\\.gnome\\.orca.0.value.enableTutorialMessages}",
            "orca.enableTutorialMessagesLabel": {messagekey: "orca.enableTutorialMessagesLabel"},
            "orca.enableEchoByCharacter": "${prefs.http://registry\\.gpii\\.org/applications/org\\.gnome\\.orca.0.value.enableEchoByCharacter}",
            "orca.enableEchoByCharacterLabel": {messagekey: "orca.enableEchoByCharacterLabel"},
            "orca.enableEchoByWord": "${prefs.http://registry\\.gpii\\.org/applications/org\\.gnome\\.orca.0.value.enableEchoByWord}",
            "orca.enableEchoByWordLabel": {messagekey: "orca.enableEchoByWordLabel"},
            "orca.enableBraille": "${prefs.http://registry\\.gpii\\.org/applications/org\\.gnome\\.orca.0.value.enableBraille}",
            "orca.enableBrailleLabel": {messagekey: "orca.enableBrailleLabel"},
            "orca.verbalizePunctuationStyle": {
                decorators: {
                    type: "fluid",
                    func: "gpii.textfieldSlider",
                    options: {
                        elPath: "prefs.http://registry\\.gpii\\.org/applications/org\\.gnome\\.orca.0.value.verbalizePunctuationStyle",
                        model: {
                            min: 0,
                            max: 3
                        }
                    }
                }
            },
            "orca.verbalizePunctuationStyleLabel": {messagekey: "orca.verbalizePunctuationStyleLabel"},
            "orca.sayAllStyle": {
                decorators: {
                    type: "fluid",
                    func: "gpii.textfieldSlider",
                    options: {
                        elPath: "prefs.http://registry\\.gpii\\.org/applications/org\\.gnome\\.orca.0.value.sayAllStyle",
                        model: {
                            min: 0,
                            max: 1
                        }
                    }
                }
            },
            "orca.sayAllStyleLabel": {messagekey: "orca.sayAllStyleLabel"},
            "orca.enableSpeech": "${prefs.http://registry\\.gpii\\.org/applications/org\\.gnome\\.orca.0.value.enableSpeech}",
            "orca.enableSpeechLabel": {messagekey: "orca.enableSpeechLabel"},
            "desktop.gtk-theme": {
                optionnames: "${gtk-themeValues}",
                optionlist: "${gtk-themeValues}",
                selection: "${prefs.http://registry\\.gpii\\.org/applications/org\\.gnome\\.desktop\\.interface.0.value.gtk-theme}"
            },
            "desktop.gtk-themeLabel": {messagekey: "desktop.gtk-themeLabel"},
            "desktop.icon-theme": {
                optionnames: "${icon-themeValues}",
                optionlist: "${icon-themeValues}",
                selection: "${prefs.http://registry\\.gpii\\.org/applications/org\\.gnome\\.desktop\\.interface.0.value.icon-theme}"
            },
            "desktop.icon-themeLabel": {messagekey: "desktop.icon-themeLabel"},
            "desktop.text-scaling-factor": {
                decorators: {
                    type: "fluid",
                    func: "gpii.textfieldSlider",
                    options: {
                        elPath: "prefs.http://registry\\.gpii\\.org/applications/org\\.gnome\\.desktop\\.interface.0.value.text-scaling-factor",
                        model: {
                            min: 0.5,
                            max: 3
                        },
                        sliderOptions: {
                            step: 0.5
                        }
                    }
                }
            },
            "desktop.text-scaling-factorLabel": {messagekey: "desktop.text-scaling-factorLabel"},
            "desktop.cursor-size": {
                decorators: {
                    type: "fluid",
                    func: "gpii.textfieldSlider",
                    options: {
                        elPath: "prefs.http://registry\\.gpii\\.org/applications/org\\.gnome\\.desktop\\.interface.0.value.cursor-size",
                        model: {
                            min: 1,
                            max: 100
                        }
                    }
                }
            },
            "desktop.cursor-sizeLabel": {messagekey: "desktop.cursor-sizeLabel"},
            "desktop.screen-magnifier-enabled":
                "${prefs.http://registry\\.gpii\\.org/applications/org\\.gnome\\.desktop\\.a11y\\.applications.0.value.screen-magnifier-enabled}",
            "desktop.screen-magnifier-enabledLabel": {messagekey: "desktop.screen-magnifier-enabledLabel"},
            "desktop.mag-factor": {
                decorators: {
                    type: "fluid",
                    func: "gpii.textfieldSlider",
                    options: {
                        elPath: "prefs.http://registry\\.gpii\\.org/applications/org\\.gnome\\.desktop\\.a11y\\.magnifier.0.value.mag-factor",
                        model: {
                            min: 1,
                            max: 20
                        }
                    }
                }
            },
            "desktop.mag-factorLabel": {messagekey: "desktop.mag-factorLabel"},
            "desktop.screen-position": {
                optionnames: "${screen-positionValues}",
                optionlist: "${screen-positionValues}",
                selection: "${prefs.http://registry\\.gpii\\.org/applications/org\\.gnome\\.desktop\\.a11y\\.magnifier.0.value.screen-position}"
            },
            "desktop.screen-positionLabel": {messagekey: "desktop.screen-positionLabel"},
            "desktop.show-cross-hairs": "${prefs.http://registry\\.gpii\\.org/applications/org\\.gnome\\.desktop\\.a11y\\.magnifier.0.value.show-cross-hairs}",
            "desktop.show-cross-hairsLabel": {messagekey: "desktop.show-cross-hairsLabel"},
            "nvda.speech.espeak.rate": {
                decorators: {
                    type: "fluid",
                    func: "gpii.textfieldSlider",
                    options: {
                        elPath: "prefs.http://registry\\.gpii\\.org/applications/org\\.nvda-project.0.value.speech.espeak.rate",
                        model: {
                            min: 1,
                            max: 100
                        }
                    }
                }
            },
            "nvda.speech.espeak.rateLabel": {messagekey: "nvda.speech.espeak.rateLabel"},
            "nvda.speech.espeak.rateBoost": "${prefs.http://registry\\.gpii\\.org/applications/org\\.nvda-project.0.value.speech.espeak.rateBoost}",
            "nvda.speech.espeak.rateBoostLabel": {messagekey: "nvda.speech.espeak.rateBoostLabel"}
        },
        events: {
            updatePrefs: null
        },
        prefsUrl: "/prefs/%token",
        listeners: {
            updatePrefs: "{that}.updatePrefs",
            afterRender: "{that}.bindSave"
        },
        invokers: {
            updatePrefs: {
                funcName: "gpii.NPGatheringTool.updatePrefs",
                args: ["{that}.applier", "{arguments}.0", "{that}.refreshView"]
            },
            save: {
                funcName: "gpii.NPGatheringTool.save",
                args: "{that}"
            },
            bindSave: {
                funcName: "gpii.NPGatheringTool.bindSave",
                args: ["{that}.dom.save", "{that}.save"]
            }
        },
        components: {
            tokenReader: {
                type: "gpii.tokenReader"
            }
        },
        renderOnInit: true,
        // Both set and get configs are used to resolve elPaths that contain escaped "." characters
        // and to prevent these paths from being parsed into a nested structure.
        resolverGetConfig: gpii.NPGatheringTool.resolverGetConfig,
        resolverSetConfig: gpii.NPGatheringTool.resolverSetConfig
    });

    gpii.NPGatheringTool.updatePrefs = function (applier, model, refreshView) {
        applier.requestChange("", model);
        refreshView();
    };

    gpii.NPGatheringTool.bindSave = function (saveButton, save) {
        saveButton.click(save);
    };

    gpii.NPGatheringTool.save = function (that) {
        var token = that.model.token;
        if (!token) {
            return;
        }
        $.post(fluid.stringTemplate(that.options.prefsUrl, {token: token}), that.model.prefs).done(function (data) {
            if (data.isError) {
                return;
            }
            location.replace(token);
        });
    };

    fluid.defaults("gpii.textfieldSlider", {
        gradeNames: ["autoInit", "fluid.textfieldSlider"],
        elPath: "",
        sliderOptions: {
            orientation: "horizontal",
            step: 1
        },
        model: {
            value: {
                expander: {
                    func: "fluid.get",
                    args: ["{gpii.NPGatheringTool}.model", "{that}.options.elPath", "{gpii.NPGatheringTool}.options.resolverGetConfig"]
                }
            }
        },
        listeners: {
            modelChanged: {
                listener: "{gpii.NPGatheringTool}.applier.requestChange",
                args: ["{that}.options.elPath", "{arguments}.0"]
            }
        }
    });

    fluid.defaults("gpii.tokenReader", {
        gradeNames: ["autoInit", "fluid.eventedComponent"],
        token: {
            expander: {
                func: "gpii.tokenReader.readToken"
            }
        },
        invokers: {
            readPrefs: {
                funcName: "gpii.tokenReader.readPrefs",
                args: ["{that}.options.token", "{that}.options.prefsUrl", "{that}.events.afterReadPrefs"]
            }
        },
        prefsUrl: "{gpii.NPGatheringTool}.options.prefsUrl",
        events: {
            afterReadPrefs: "{gpii.NPGatheringTool}.events.updatePrefs"
        },
        listeners: {
            onCreate: "{that}.readPrefs"
        }
    });

    gpii.tokenReader.readToken = function () {
        return location.pathname.match(/\/(.*)/)[1];
    };

    gpii.tokenReader.readPrefs = function (token, url, afterReadPrefs) {
        if (!token) {
            return;
        }
        fluid.fetchResources({
            prefs: {
                url: fluid.stringTemplate(url, {token: token}),
                options: {
                    dataType: "json"
                }
            }
        }, function (resourceSpec) {
            var prefs = resourceSpec.prefs.resourceText;
            if (prefs.isError) {
                return;
            }
            afterReadPrefs.fire({
                token: token,
                prefs: prefs
            });
        });
    };

    $(document).ready(function () {
        gpii.NPGatheringTool(".gpii-NPGatheringTool");
    });
    
})(jQuery, fluid);