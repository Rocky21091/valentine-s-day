import 'package:flutter/material.dart';
import 'dart:math';
import 'dart:async';

void main() => runApp(const HeartJournalApp());

class HeartJournalApp extends StatelessWidget {
  const HeartJournalApp({super.key});
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(fontFamily: 'Quicksand'), // Romantic font used in index.html
      home: const HeartStory(),
    );
  }
}

class HeartStory extends StatefulWidget {
  const HeartStory({super.key});
  @override
  State<HeartStory> createState() => _HeartStoryState();
}

class _HeartStoryState extends State<HeartStory> {
  final PageController _pageController = PageController();
  
  // 6-Page Romantic Narrative content
  final List<Map<String, String>> _storyPages = [
    {"title": "The First Beat", "content": "It started with a single moment, a heartbeat that felt different from all the rest. I knew then that my world was shifting."},
    {"title": "Written in the Stars", "content": "I look at how our lives have crossed, and I see a map of destiny. Every step I took led me straight to your heart."},
    {"title": "The Silent Language", "content": "We don't always need words. I find my peace in the way you hold my hand and the quiet safety of your presence."},
    {"title": "My Constant Home", "content": "In a world that never stops changing, you are my still point. You are the warmth I return to at the end of every day."},
    {"title": "A Lifetime of Us", "content": "I see a thousand tomorrows in your eyes. I promise to choose you, today, tomorrow, and every day that follows."},
    {"title": "The Eternal Echo", "content": ""}, 
  ];

  void _nextPage() {
    if (_pageController.page! < _storyPages.length - 1) {
      // UPDATED: Romantic Fade & Slow Scale transition
      _pageController.nextPage(
        duration: const Duration(milliseconds: 1200),
        curve: Curves.fastOutSlowIn, 
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFFFF0F3), // Old Rose Background
      body: Stack(
        children: [
          const FallingHeartsOverlay(), // Heart particles
          
          PageView.builder(
            controller: _pageController,
            physics: const NeverScrollableScrollPhysics(),
            itemCount: _storyPages.length,
            itemBuilder: (context, index) {
              bool isLast = index == _storyPages.length - 1;
              return _buildPageContent(_storyPages[index], isLast);
            },
          ),
        ],
      ),
    );
  }

  Widget _buildPageContent(Map<String, String> data, bool isLast) {
    return AnimatedBuilder(
      animation: _pageController,
      builder: (context, child) {
        // Custom Romantic Scaling Transition
        double value = 1.0;
        if (_pageController.position.haveDimensions) {
          value = _pageController.page! - _pageController.page!.floor();
          value = (1 - (value * 0.1)).clamp(0.9, 1.0);
        }

        return Opacity(
          opacity: 1.0, 
          child: Transform.scale(
            scale: value,
            child: Container(
              width: double.infinity,
              padding: const EdgeInsets.symmetric(horizontal: 40),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  if (!isLast) ...[
                    // Cute romantic GIF
                    Image.network(
                      'https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif',
                      height: 220,
                    ),
                    const SizedBox(height: 40),
                    Text(
                      data["title"]!, 
                      textAlign: TextAlign.center,
                      style: const TextStyle(fontSize: 34, fontWeight: FontWeight.bold, color: Color(0xFFAD1457)),
                    ),
                    const SizedBox(height: 25),
                    Text(
                      data["content"]!, 
                      textAlign: TextAlign.center, 
                      style: const TextStyle(fontSize: 22, height: 1.6, color: Color(0xFF880E4F)),
                    ),
                    const SizedBox(height: 60),
                    GestureDetector(
                      onTap: _nextPage,
                      child: Container(
                        padding: const EdgeInsets.symmetric(horizontal: 55, vertical: 16),
                        decoration: BoxDecoration(
                          color: const Color(0xFFFFC2D1),
                          borderRadius: BorderRadius.circular(35),
                          boxShadow: [
                            BoxShadow(color: Colors.pink.withOpacity(0.2), blurRadius: 12, offset: const Offset(0, 5)),
                          ],
                        ),
                        child: const Text(
                          "Next Heartbeat", 
                          style: TextStyle(color: Color(0xFFAD1457), fontSize: 18, fontWeight: FontWeight.bold),
                        ),
                      ),
                    ),
                  ] else 
                    const TypewriterClosing(), // Final content with typewriter
                ],
              ),
            ),
          ),
        );
      },
    );
  }
}

class TypewriterClosing extends StatefulWidget {
  const TypewriterClosing({super.key});
  @override
  State<TypewriterClosing> createState() => _TypewriterClosingState();
}

class _TypewriterClosingState extends State<TypewriterClosing> {
  final String _message = "As we reach the final page, I want you to know that you are the most beautiful part of my life. My heart beats for the moments we share and the future we are building together. You are my greatest adventure, my deepest peace, and my forever love. Thank you for being my everything.";
  String _visibleText = "";
  int _index = 0;

  @override
  void initState() {
    super.initState();
    _startEffect();
  }

  void _startEffect() {
    Timer.periodic(const Duration(milliseconds: 70), (timer) {
      if (_index < _message.length) {
        if (mounted) {
          setState(() {
            _visibleText += _message[_index];
            _index++;
          });
        }
      } else {
        timer.cancel();
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        const Icon(Icons.favorite, color: Color(0xFFAD1457), size: 60),
        const SizedBox(height: 35),
        Text(
          _visibleText, 
          textAlign: TextAlign.center, 
          style: const TextStyle(fontSize: 22, height: 1.8, color: Color(0xFF880E4F), fontStyle: FontStyle.italic),
        ),
        const SizedBox(height: 45),
        const Icon(Icons.favorite_border, color: Color(0xFFD81B60), size: 45),
      ],
    );
  }
}

class FallingHeartsOverlay extends StatefulWidget {
  const FallingHeartsOverlay({super.key});
  @override
  State<FallingHeartsOverlay> createState() => _FallingHeartsOverlayState();
}

class _FallingHeartsOverlayState extends State<FallingHeartsOverlay> with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  @override
  void initState() {
    super.initState();
    _controller = AnimationController(vsync: this, duration: const Duration(seconds: 15))..repeat();
  }
  @override
  void dispose() { _controller.dispose(); super.dispose(); }
  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: _controller,
      builder: (context, child) {
        return Stack(
          children: List.generate(22, (i) {
            double top = ((_controller.value + (i / 22)) % 1.0) * MediaQuery.of(context).size.height;
            double left = (0.5 + 0.48 * sin(i + _controller.value * 9)) * MediaQuery.of(context).size.width;
            return Positioned(
              top: top, 
              left: left, 
              child: Icon(
                Icons.favorite, 
                color: const Color(0xFFFFC2D1).withOpacity(0.55), 
                size: 18 + (i % 15).toDouble(),
              )
            );
          }),
        );
      },
    );
  }
}