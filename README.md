# Comparison between render loops

RN Reanimated and RN Skia is running on separate thread, which are preventing animation jank, when the main thread is getting blocked.
R3F is currently not utilizing this pattern.

This playground is demonstrating those differences.

https://github.com/matis-dk/react-r3f/assets/32526593/cd90af88-3cd2-4894-ab46-c57ee6f62460

