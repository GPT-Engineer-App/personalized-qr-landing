import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import QRCode from "qrcode.react";

const Index = () => {
  const [username, setUsername] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [socialLinks, setSocialLinks] = useState([]);
  const [websites, setWebsites] = useState([]);
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  const handleGenerateQRCode = () => {
    const url = `${window.location.origin}/user/${username}`;
    setQrCodeUrl(url);
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Customize Your Landing Page</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Avatar URL"
            value={avatarUrl}
            onChange={(e) => setAvatarUrl(e.target.value)}
          />
          <Input
            placeholder="Social Media Links (comma separated)"
            value={socialLinks.join(", ")}
            onChange={(e) => setSocialLinks(e.target.value.split(", "))}
          />
          <Input
            placeholder="Websites (comma separated)"
            value={websites.join(", ")}
            onChange={(e) => setWebsites(e.target.value.split(", "))}
          />
          <Button onClick={handleGenerateQRCode}>Generate QR Code</Button>
        </CardContent>
      </Card>

      {qrCodeUrl && (
        <div className="flex flex-col items-center space-y-4">
          <QRCode value={qrCodeUrl} size={256} />
          <Button onClick={() => window.open(qrCodeUrl, "_blank")}>
            Open Landing Page
          </Button>
        </div>
      )}
    </div>
  );
};

export default Index;