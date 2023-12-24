# Comparison between render loops

RN Reanimated and RN Skia is running on separate thread, which are preventing animation jank, when the main thread is getting blocked.
R3F is currently not utilizing this pattern.

This playground is demonstrating those differences.
