import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const EnhancedTerminal = () => {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [completedCommands, setCompletedCommands] = useState([]);

  const commands = [
    {
      input: "whoami",
      output: "aspiring-devops-engineer",
      color: "text-blue-400",
      delay: 1000,
    },
    {
      input: "cat skills.txt",
      output: [
        "# Core Skills",
        "├── Full Stack Development (MERN)",
        "├── DevOps & Cloud (Docker, K8s, AWS)",
        "├── CI/CD Pipelines (Jenkins, GitHub Actions)",
        "└── Infrastructure as Code (Terraform)",
      ],
      color: "text-gray-400",
      delay: 1500,
    },
    // {
    //   input: "ls -la ~/projects",
    //   output: [
    //     "total 5",
    //     "drwxr-xr-x  5  user  staff   Fashion Collection Website",
    //     "drwxr-xr-x  5  user  staff   GearUp E-commerce Platform",
    //     "drwxr-xr-x  5  user  staff   Blogging Platform",
    //     "drwxr-xr-x  5  user  staff   CI/CD Pipeline Project",
    //     "drwxr-xr-x  5  user  staff   Infrastructure as Code (Terraform)",
    //   ],
    //   color: "text-cyan-400",
    //   delay: 1500,
    // },
    // {
    //   input: "cat currently-learning.log",
    //   output: [
    //     "[2024-01-15] 🔄 Kubernetes & Container Orchestration",
    //     "[2024-01-20] ☁️  AWS Cloud Services & Architecture",
    //     "[2024-01-25] 🏗️  Terraform & Infrastructure as Code",
    //     "[2024-02-01] 🚀 CI/CD Pipeline Optimization",
    //   ],
    //   color: "text-yellow-400",
    //   delay: 1500,
    // },
    {
      input: "echo $PASSION",
      output: '"Automation & Building Scalable Systems"',
      color: "text-purple-400",
      delay: 1000,
    },
    {
      input: "uptime",
      output:
        "🟢 Status: Looking for opportunities | Continuously working on improving my skills",
      color: "text-emerald-400",
      delay: 1000,
    },
    {
      input:
        'curl -s https://github.com/muskan1024?tab=repositories | grep -c "name"',
      output: "20+ repositories",
      color: "text-green-400",
      delay: 1000,
    },

    // {
    //   input: "cat /etc/devops-stats.conf",
    //   output: [
    //     "╔══════════════════════════════════╗",
    //     "║  DevOps Journey Metrics          ║",
    //     "╠══════════════════════════════════╣",
    //     "║  Projects Deployed:      5+      ║",
    //     "║  Technologies Mastered:  20+     ║",
    //     "║  Lines of Code:         10K+     ║",
    //     "║  Success Rate:          98%      ║",
    //     "╚══════════════════════════════════╝",
    //   ],
    //   color: "text-blue-300",
    //   delay: 2000,
    // },
  ];

  useEffect(() => {
    if (currentCommandIndex >= commands.length) {
      setIsTyping(false);
      return;
    }

    const currentCommand = commands[currentCommandIndex];
    const fullInput = currentCommand.input;

    if (isTyping) {
      let charIndex = 0;
      const typingInterval = setInterval(() => {
        if (charIndex <= fullInput.length) {
          setDisplayedText(fullInput.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typingInterval);

          // Show output after typing input
          setTimeout(() => {
            setCompletedCommands((prev) => [...prev, currentCommand]);
            setDisplayedText("");
            setCurrentCommandIndex((prev) => prev + 1);
          }, 500);
        }
      }, 80); // Typing speed

      return () => clearInterval(typingInterval);
    }
  }, [currentCommandIndex, isTyping]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#1E1E1E] p-6 md:p-8 rounded-xl border border-gray-700 shadow-2xl font-mono text-sm overflow-hidden"
    >
      {/* Terminal Header */}
      <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-700">
        <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors cursor-pointer" />
        <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors cursor-pointer" />
        <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors cursor-pointer" />
        <span className="ml-2 text-gray-400 text-xs">
          zsh - muskans-portfolio
        </span>
        <div className="ml-auto flex items-center gap-2 text-gray-500 text-xs">
          <span>●</span>
          <span>127.0.0.1</span>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="space-y-3 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
        {/* Welcome Message */}
        <div className="text-green-400 mb-4">
          <div>Welcome to Muskan's Portfolio Terminal v1.0</div>
          <div className="text-gray-500 text-xs mt-1">
            Type 'help' for available commands
          </div>
        </div>

        {/* Completed Commands */}
        {completedCommands.map((cmd, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-2"
          >
            {/* Command Input */}
            <div className="flex items-start gap-2">
              <span className="text-green-400">➜</span>
              <span className="text-purple-400">~</span>
              <span className="text-gray-300">{cmd.input}</span>
            </div>

            {/* Command Output */}
            <div className={`pl-6 ${cmd.color}`}>
              {Array.isArray(cmd.output) ? (
                <div className="space-y-1">
                  {cmd.output.map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      {line}
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div>{cmd.output}</div>
              )}
            </div>
          </motion.div>
        ))}

        {/* Current Typing Command */}
        {isTyping && currentCommandIndex < commands.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-start gap-2"
          >
            <span className="text-green-400">➜</span>
            <span className="text-purple-400">~</span>
            <span className="text-gray-300">
              {displayedText}
              <span className="animate-pulse">▋</span>
            </span>
          </motion.div>
        )}

        {/* Final Cursor */}
        {!isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-start gap-2 mt-4"
          >
            <span className="text-green-400">➜</span>
            <span className="text-purple-400">~</span>
            <span className="text-gray-300 animate-pulse">▋</span>
          </motion.div>
        )}
      </div>

      {/* Terminal Footer Info */}
      <div className="mt-6 pt-4 border-t border-gray-700 flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Online
          </span>
          <span>Shell: zsh</span>
        </div>
        <div>Last login: {new Date().toLocaleDateString()}</div>
      </div>
    </motion.div>
  );
};

export default EnhancedTerminal;
