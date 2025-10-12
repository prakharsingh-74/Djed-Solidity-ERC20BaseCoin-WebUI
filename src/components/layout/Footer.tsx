"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, MessageCircle } from 'lucide-react';

interface FooterProps {
  className?: string;
}

export default function Footer({ className = "" }: FooterProps) {
  const socialLinks = [
    {
      name: "Twitter",
      href: "https://twitter.com/djedprotocol",
      icon: Twitter,
    },
    {
      name: "GitHub",
      href: "https://github.com/djedprotocol",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/djedprotocol",
      icon: Linkedin,
    },
    {
      name: "Discord",
      href: "https://discord.gg/djedprotocol",
      icon: MessageCircle,
    },
  ];

  const footerLinks = [
    { name: "Documentation", href: "/docs" },
    { name: "Whitepaper", href: "/whitepaper" },
    { name: "Security", href: "/security" },
    { name: "Terms", href: "/terms" },
    { name: "Privacy", href: "/privacy" },
  ];

  return (
    <footer className={`border-t border-border bg-surface ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="text-2xl font-bold text-gradient">
                Djed Protocol
              </div>
            </div>
            <p className="text-secondary mb-6 max-w-md">
              Algorithmic stablecoin protocol with a user-friendly interface for buying and selling stablecoins.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-surface-elevated hover:bg-border transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="w-5 h-5 text-secondary hover:text-primary transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Section */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-secondary hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="text-secondary hover:text-primary transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/help"
                  className="text-secondary hover:text-primary transition-colors text-sm"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/status"
                  className="text-secondary hover:text-primary transition-colors text-sm"
                >
                  System Status
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary text-sm">
              © 2024 Djed Protocol. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-secondary text-sm">Built with ❤️ for DeFi</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}