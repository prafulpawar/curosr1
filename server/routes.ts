import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Chatbot endpoint
  app.post("/api/chatbot", async (req, res) => {
    try {
      const { message } = req.body;
      
      if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: "Message is required" });
      }

      // Simple chatbot responses based on keywords
      const responses = getChatbotResponse(message.toLowerCase());
      
      res.json({ response: responses });
    } catch (error) {
      console.error("Chatbot error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

function getChatbotResponse(message: string): string {
  // Keywords and responses for INVIdata
  const responses: Record<string, string> = {
    'hello': "Hello! I'm here to help you understand INVIdata's revolutionary Invisible Internal Data Security (IIDS). What would you like to know?",
    'hi': "Hi there! How can I assist you with INVIdata's zero-byte security solution today?",
    'pricing': "INVIdata offers flexible pricing: Single User (₹499/month or ₹2,499/year), Small Team up to 5 users (₹1,499/month or ₹7,499/year), and Enterprise plans with custom pricing. You save 58% with annual billing!",
    'iids': "IIDS (Invisible Internal Data Security) is our revolutionary technology that transforms files into zero-byte objects, making them invisible to attackers while maintaining full functionality within our secure environment.",
    'how': "INVIdata works by embedding self-defense mechanisms directly inside your files using our Virtual Invisible Partition (VIP) technology. Files appear as zero bytes outside INVImanager but function normally within the secure environment.",
    'security': "Our security approach is unique - instead of protecting the perimeter, we make the data itself invisible and self-defending. Files become immune to ransomware, data theft, and unauthorized access.",
    'download': "You can download INVImanager from our website. It's our Windows application that embeds IIDS technology directly into your files for maximum protection.",
    'features': "Key features include: Zero-byte invisibility, built-in authentication, non-transferable encryption, offline security, easy drag-and-drop interface, and flexible billing options.",
    'ransomware': "INVIdata provides complete ransomware protection because protected files appear as zero bytes to any malicious software. Even if your system is compromised, your IIDS-protected files remain safe and inaccessible.",
    'support': "For technical support, you can contact us at support@invidata.com. We provide email support for all plans and priority phone support for team plans.",
    'demo': "We offer live demos to show how INVIdata's invisible file protection works in practice. The files literally become zero bytes outside our secure environment!",
    'vip': "VIP (Virtual Invisible Partition) is our proprietary OS-layer technology that creates a secure, non-bootable environment where your files exist normally, while appearing as zero bytes everywhere else."
  };

  // Find matching keywords
  for (const [keyword, response] of Object.entries(responses)) {
    if (message.includes(keyword)) {
      return response;
    }
  }

  // Default response
  return "I'd be happy to help you learn about INVIdata's revolutionary cybersecurity technology! You can ask me about our pricing, how IIDS works, security features, ransomware protection, or request a demo. What interests you most?";
}
